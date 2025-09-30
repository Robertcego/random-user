import React from 'react';
import { GENDER_OPTIONS } from '../../../utils/constants';
import styles from './GenderSelector.module.css';

/**
 * Gender selector component
 * @param {Object} props - Component props
 * @param {string} props.value - Selected gender value
 * @param {Function} props.onChange - Change handler
 * @param {Function} props.onGenerate - Generate user handler
 * @param {boolean} props.loading - Loading state
 * @param {boolean} props.disabled - Disabled state
 * @returns {JSX.Element} Gender selector
 */
const GenderSelector = ({ 
  value, 
  onChange, 
  onGenerate, 
  loading = false, 
  disabled = false 
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value && onGenerate) {
      onGenerate();
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <label htmlFor="gender-select" className={styles.label}>
          Choose Gender:
        </label>
        <select
          id="gender-select"
          className={styles.select}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled || loading}
        >
          {GENDER_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      
      <button
        type="submit"
        className={`${styles.button} ${loading ? styles.loading : ''}`}
        disabled={!value || loading || disabled}
      >
        {loading ? (
          <>
            <span className={styles.spinner}></span>
            Generating...
          </>
        ) : (
          'Generate Random User'
        )}
      </button>
    </form>
  );
};

export default GenderSelector;