import React, { memo } from 'react';
import UserAvatar from '../UserAvatar';
import UserDetails from '../UserDetails';
import styles from './UserCard.module.css';

/**
 * User card component combining avatar and details
 * @param {Object} props - Component props
 * @param {Object} props.user - User object
 * @param {boolean} props.showSensitive - Whether to show sensitive data
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element} User card
 */
const UserCard = memo(({ user, showSensitive = false, className = '' }) => {
  if (!user || !user.id) {
    return null;
  }

  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.header}>
        <UserAvatar 
          src={user.avatar} 
          alt={`${user.name.full}'s avatar`}
          size="large"
        />
        <div className={styles.basicInfo}>
          <h2 className={styles.name}>{user.name.full}</h2>
          <p className={styles.title}>{user.name.title}</p>
          <p className={styles.username}>@{user.login.username}</p>
        </div>
      </div>
      
      <UserDetails user={user} showSensitive={showSensitive} />
    </div>
  );
});

UserCard.displayName = 'UserCard';

export default UserCard;