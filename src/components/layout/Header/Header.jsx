import React from 'react';
import { useTheme } from '../../../hooks/useTheme';
import styles from './Header.module.css';

/**
 * Header component with theme toggle
 * @returns {JSX.Element} Header
 */
const Header = () => {
  const { theme, toggleTheme, isLight } = useTheme();

  return (
    <header className={`${styles.header} ${styles[theme]}`}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h1 className={styles.title}>Random User</h1>
        </div>
        
        <nav className={styles.nav}>
          <button 
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={`Switch to ${isLight ? 'dark' : 'light'} mode`}
            title={`Switch to ${isLight ? 'dark' : 'light'} mode`}
          >
            <span className={styles.themeIcon}>
              {isLight ? '🌙' : '☀️'}
            </span>
            <span className={styles.themeText}>
              {isLight ? 'Dark' : 'Light'}
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;