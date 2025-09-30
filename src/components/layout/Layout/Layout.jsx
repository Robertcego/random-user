import React from 'react';
import { useTheme } from '../../../hooks/useTheme';
import Header from '../Header';
import ErrorBoundary from '../../common/ErrorBoundary';
import styles from './Layout.module.css';

/**
 * Main layout component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @returns {JSX.Element} Layout
 */
const Layout = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className={`${styles.layout} ${styles[theme]}`}>
      <Header />
      <main className={styles.main}>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p className={styles.footerText}>
            Made with ❤️ using RandomUser.me API
          </p>
          <p className={styles.copyright}>
            © 2024 Random User Generator
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;