// API Constants
export const API_BASE_URL = 'https://randomuser.me/api/';

// Gender Options
export const GENDER_OPTIONS = [
  { value: '', label: 'Select Gender' },
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
];

// Theme Constants
export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
};

// Local Storage Keys
export const STORAGE_KEYS = {
  THEME: 'randomUser_theme',
  USER_HISTORY: 'randomUser_history',
};

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  API_ERROR: 'Failed to fetch user data. Please try again.',
  NO_GENDER_SELECTED: 'Please select a gender first.',
};