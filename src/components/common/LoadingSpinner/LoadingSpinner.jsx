import React from 'react';
import styles from './LoadingSpinner.module.css';

/**
 * Loading spinner component
 * @param {Object} props - Component props
 * @param {string} props.size - Size ('small', 'medium', 'large')
 * @param {string} props.color - Color theme
 * @param {string} props.message - Loading message
 * @returns {JSX.Element} Loading spinner
 */
const LoadingSpinner = ({ 
  size = 'medium', 
  color = 'primary', 
  message = 'Loading...' 
}) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.spinner} ${styles[size]} ${styles[color]}`}>
        <div className={styles.bounce1}></div>
        <div className={styles.bounce2}></div>
        <div className={styles.bounce3}></div>
      </div>
      {message && (
        <p className={styles.message}>{message}</p>
      )}
    </div>
  );
};

export default LoadingSpinner;