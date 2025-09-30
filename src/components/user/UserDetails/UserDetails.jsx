import React, { memo } from 'react';
import { formatDate, formatPhone, capitalizeWords } from '../../../utils/formatters';
import styles from './UserDetails.module.css';

/**
 * User details component displaying formatted user information
 * @param {Object} props - Component props
 * @param {Object} props.user - User object
 * @param {boolean} props.showSensitive - Whether to show sensitive data
 * @returns {JSX.Element} User details
 */
const UserDetails = memo(({ user, showSensitive = false }) => {
  if (!user || !user.id) {
    return null;
  }

  const details = [
    {
      label: 'Full Name',
      value: user.name.full,
      icon: '👤'
    },
    {
      label: 'Username',
      value: user.login.username,
      icon: '🔑'
    },
    {
      label: 'Date of Birth',
      value: `${formatDate(user.dateOfBirth.date)} (${user.dateOfBirth.age} years old)`,
      icon: '🎂'
    },
    {
      label: 'Gender',
      value: capitalizeWords(user.gender),
      icon: user.gender === 'male' ? '♂️' : '♀️'
    },
    {
      label: 'Email',
      value: user.contact.email,
      icon: '📧'
    },
    {
      label: 'Phone',
      value: formatPhone(user.contact.phone),
      icon: '📱'
    },
    {
      label: 'Address',
      value: `${user.address.street}, ${user.address.city}, ${user.address.state}, ${user.address.country}`,
      icon: '🏠'
    },
    {
      label: 'Nationality',
      value: user.nationality,
      icon: '🌍'
    }
  ];

  if (showSensitive) {
    details.push({
      label: 'Password',
      value: user.login.password,
      icon: '🔒',
      sensitive: true
    });
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>User Information</h3>
      <div className={styles.detailsList}>
        {details.map((detail, index) => (
          <div key={index} className={`${styles.detailItem} ${detail.sensitive ? styles.sensitive : ''}`}>
            <div className={styles.detailLabel}>
              <span className={styles.icon}>{detail.icon}</span>
              {detail.label}:
            </div>
            <div className={styles.detailValue}>
              {detail.value || 'N/A'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

UserDetails.displayName = 'UserDetails';

export default UserDetails;