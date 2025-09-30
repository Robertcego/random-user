import { useReducer, useCallback } from 'react';
import randomUserApi from '../services/api/randomUserApi';
import { createEmptyUser } from '../types/user';
import { isValidGender } from '../utils/validators';
import { ERROR_MESSAGES } from '../utils/constants';

// Action types
const USER_ACTIONS = {
  FETCH_START: 'FETCH_START',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_ERROR: 'FETCH_ERROR',
  CLEAR_USER: 'CLEAR_USER',
  CLEAR_ERROR: 'CLEAR_ERROR',
};

// Initial state
const initialState = {
  user: createEmptyUser(),
  loading: false,
  error: null,
  hasUser: false,
};

// Reducer function
const userReducer = (state, action) => {
  switch (action.type) {
    case USER_ACTIONS.FETCH_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    
    case USER_ACTIONS.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        hasUser: true,
        error: null,
      };
    
    case USER_ACTIONS.FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        hasUser: false,
      };
    
    case USER_ACTIONS.CLEAR_USER:
      return {
        ...state,
        user: createEmptyUser(),
        hasUser: false,
        error: null,
      };
    
    case USER_ACTIONS.CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    
    default:
      return state;
  }
};

/**
 * Custom hook for managing random user data
 * @returns {Object} User state and actions
 */
export const useRandomUser = () => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  /**
   * Fetch a random user
   * @param {string} gender - Gender preference
   * @param {string} nationality - Optional nationality
   */
  const fetchUser = useCallback(async (gender, nationality = null) => {
    // Validate gender
    if (!isValidGender(gender)) {
      dispatch({
        type: USER_ACTIONS.FETCH_ERROR,
        payload: ERROR_MESSAGES.NO_GENDER_SELECTED,
      });
      return;
    }

    dispatch({ type: USER_ACTIONS.FETCH_START });

    try {
      const user = await randomUserApi.getUser(gender, nationality);
      dispatch({
        type: USER_ACTIONS.FETCH_SUCCESS,
        payload: user,
      });
    } catch (error) {
      dispatch({
        type: USER_ACTIONS.FETCH_ERROR,
        payload: error.message || ERROR_MESSAGES.API_ERROR,
      });
    }
  }, []);

  /**
   * Clear current user data
   */
  const clearUser = useCallback(() => {
    dispatch({ type: USER_ACTIONS.CLEAR_USER });
  }, []);

  /**
   * Clear current error
   */
  const clearError = useCallback(() => {
    dispatch({ type: USER_ACTIONS.CLEAR_ERROR });
  }, []);

  return {
    ...state,
    fetchUser,
    clearUser,
    clearError,
  };
};