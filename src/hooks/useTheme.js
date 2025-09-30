import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { useLocalStorage } from './useLocalStorage';
import { STORAGE_KEYS, THEMES } from '../utils/constants';

/**
 * Enhanced theme hook with localStorage persistence
 * @returns {Object} Theme state and actions
 */
export const useTheme = () => {
  // Always call hooks at the top level
  const [fallbackTheme, setFallbackTheme] = useLocalStorage(STORAGE_KEYS.THEME, THEMES.LIGHT);
  const context = useContext(ThemeContext);
  
  if (!context) {
    // Fallback implementation when context is not available
    const toggleTheme = () => {
      setFallbackTheme(prevTheme => prevTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
    };
    
    const setLightTheme = () => setFallbackTheme(THEMES.LIGHT);
    const setDarkTheme = () => setFallbackTheme(THEMES.DARK);
    
    return {
      theme: fallbackTheme,
      isLight: fallbackTheme === THEMES.LIGHT,
      isDark: fallbackTheme === THEMES.DARK,
      toggleTheme,
      setLightTheme,
      setDarkTheme,
    };
  }
  
  return {
    ...context,
    isLight: context.theme === THEMES.LIGHT,
    isDark: context.theme === THEMES.DARK,
  };
};
