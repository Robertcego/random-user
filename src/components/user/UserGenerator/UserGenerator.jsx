import React, { useState, useCallback } from 'react';
import { useRandomUser } from '../../../hooks/useRandomUser';
import GenderSelector from '../GenderSelector';
import UserCard from '../UserCard';
import LoadingSpinner from '../../common/LoadingSpinner';
import styles from './UserGenerator.module.css';

/**
 * Main user generator component
 * @returns {JSX.Element} User generator
 */
const UserGenerator = () => {
  const { user, loading, error, hasUser, fetchUser, clearUser, clearError } = useRandomUser();
  const [selectedGender, setSelectedGender] = useState('');
  const [showSensitive, setShowSensitive] = useState(false);

  const handleGenderChange = useCallback((gender) => {
    setSelectedGender(gender);
    if (error) {
      clearError();
    }
  }, [error, clearError]);

  const handleGenerateUser = useCallback(() => {
    if (selectedGender) {
      fetchUser(selectedGender);
    }
  }, [selectedGender, fetchUser]);

  const handleClearUser = useCallback(() => {
    clearUser();
    setSelectedGender('');
    setShowSensitive(false);
  }, [clearUser]);

  const toggleSensitiveData = useCallback(() => {
    setShowSensitive(prev => !prev);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Random User Generator</h1>
        <p className={styles.subtitle}>
          Generate random user profiles with detailed information
        </p>
      </div>

      <GenderSelector
        value={selectedGender}
        onChange={handleGenderChange}
        onGenerate={handleGenerateUser}
        loading={loading}
      />

      {error && (
        <div className={styles.errorContainer}>
          <div className={styles.errorMessage}>
            <span className={styles.errorIcon}>⚠️</span>
            {error}
          </div>
          <button 
            className={styles.retryButton}
            onClick={() => clearError()}
          >
            Dismiss
          </button>
        </div>
      )}

      {loading && (
        <LoadingSpinner 
          size="large" 
          message="Generating random user..." 
        />
      )}

      {hasUser && user && !loading && (
        <div className={styles.userSection}>
          <div className={styles.userActions}>
            <button 
              className={styles.actionButton}
              onClick={handleClearUser}
            >
              🗑️ Clear User
            </button>
            <button 
              className={`${styles.actionButton} ${showSensitive ? styles.active : ''}`}
              onClick={toggleSensitiveData}
            >
              {showSensitive ? '🙈 Hide' : '👁️ Show'} Sensitive Data
            </button>
            <button 
              className={styles.actionButton}
              onClick={handleGenerateUser}
              disabled={!selectedGender}
            >
              🔄 Generate New
            </button>
          </div>
          
          <UserCard 
            user={user} 
            showSensitive={showSensitive}
          />
        </div>
      )}
    </div>
  );
};

export default UserGenerator;