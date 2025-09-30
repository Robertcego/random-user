import React, { memo } from 'react';
import styles from './UserAvatar.module.css';

/**
 * User avatar component with responsive sizing
 * @param {Object} props - Component props
 * @param {string} props.src - Avatar image source
 * @param {string} props.alt - Alt text
 * @param {string} props.size - Size variant ('small', 'medium', 'large')
 * @param {boolean} props.loading - Loading state
 * @returns {JSX.Element} User avatar
 */
const UserAvatar = memo(({ 
  src, 
  alt = 'User Avatar', 
  size = 'large',
  loading = false 
}) => {
  if (loading) {
    return (
      <div className={`${styles.avatar} ${styles[size]} ${styles.loading}`}>
        <div className={styles.placeholder}>
          <div className={styles.spinner}></div>
        </div>
      </div>
    );
  }

  if (!src) {
    return (
      <div className={`${styles.avatar} ${styles[size]} ${styles.placeholder}`}>
        <svg 
          className={styles.placeholderIcon}
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      </div>
    );
  }

  return (
    <div className={`${styles.avatar} ${styles[size]}`}>
      <img 
        src={src} 
        alt={alt}
        className={styles.image}
        loading="lazy"
      />
    </div>
  );
});

UserAvatar.displayName = 'UserAvatar';

export default UserAvatar;