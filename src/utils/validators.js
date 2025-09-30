/**
 * Validate if gender is selected
 * @param {string} gender - Selected gender
 * @returns {boolean} Is valid
 */
export const isValidGender = (gender) => {
  return gender && (gender === 'male' || gender === 'female');
};

/**
 * Validate user object
 * @param {object} user - User object
 * @returns {boolean} Is valid user
 */
export const isValidUser = (user) => {
  if (!user || typeof user !== 'object') return false;
  
  const requiredFields = ['id', 'name', 'email'];
  return requiredFields.every(field => user[field]);
};

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} Is valid email
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};