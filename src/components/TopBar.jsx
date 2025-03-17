import React, { useContext } from 'react'; // Removed `useEffect` and `useState`
import barCSS from './TopBar.module.css';
import { ThemeContext } from '../contexts/ThemeContext'; // Ensure correct import

function TopBar() {
    const { theme, toggleTheme } = useContext(ThemeContext); // Get theme and toggle function from context

    // Determine the button emoji based on current theme
    const themeValue = theme === 'light' ? '☀️' : '🌙';

    return (
        <div className={`${barCSS.topBar} ${theme === 'light' ? barCSS.topBar_dark : barCSS.topBar_light}`}>
            {/* Call toggleTheme directly on button click */}
            <button onClick={toggleTheme} className={barCSS.topBar_btn}>
                {themeValue}
            </button>
        </div>
    );
}

export default TopBar;