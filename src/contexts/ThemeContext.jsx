import React, { createContext, useCallback } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { STORAGE_KEYS, THEMES } from '../utils/constants';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useLocalStorage(STORAGE_KEYS.THEME, THEMES.LIGHT);

    const toggleTheme = useCallback(() => {
        setTheme((prevTheme) => (prevTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT));
    }, [setTheme]);

    const setLightTheme = useCallback(() => {
        setTheme(THEMES.LIGHT);
    }, [setTheme]);

    const setDarkTheme = useCallback(() => {
        setTheme(THEMES.DARK);
    }, [setTheme]);

    const value = {
        theme,
        toggleTheme,
        setLightTheme,
        setDarkTheme,
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};
