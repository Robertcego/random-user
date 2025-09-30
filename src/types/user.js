/**
 * User type definition for better code documentation
 */

/**
 * @typedef {Object} UserName
 * @property {string} first - First name
 * @property {string} last - Last name
 * @property {string} full - Full name
 * @property {string} title - Title (Mr, Mrs, etc.)
 */

/**
 * @typedef {Object} UserLogin
 * @property {string} username - Username
 * @property {string} password - Password
 */

/**
 * @typedef {Object} UserDateOfBirth
 * @property {string} date - Birth date ISO string
 * @property {number} age - Age in years
 */

/**
 * @typedef {Object} UserContact
 * @property {string} email - Email address
 * @property {string} phone - Phone number
 * @property {string} cell - Cell phone number
 */

/**
 * @typedef {Object} UserCoordinates
 * @property {string} latitude - Latitude
 * @property {string} longitude - Longitude
 */

/**
 * @typedef {Object} UserTimezone
 * @property {string} offset - Timezone offset
 * @property {string} description - Timezone description
 */

/**
 * @typedef {Object} UserAddress
 * @property {string} street - Street address
 * @property {string} city - City
 * @property {string} state - State/Province
 * @property {string} country - Country
 * @property {string|number} postcode - Postal code
 * @property {UserCoordinates} coordinates - GPS coordinates
 * @property {UserTimezone} timezone - Timezone info
 */

/**
 * @typedef {Object} UserRegistered
 * @property {string} date - Registration date ISO string
 * @property {number} age - Years since registration
 */

/**
 * @typedef {Object} User
 * @property {string} id - Unique identifier
 * @property {string} avatar - Large avatar URL
 * @property {string} avatarMedium - Medium avatar URL
 * @property {string} avatarThumbnail - Thumbnail avatar URL
 * @property {UserName} name - Name information
 * @property {UserLogin} login - Login credentials
 * @property {UserDateOfBirth} dateOfBirth - Birth information
 * @property {string} gender - Gender (male/female)
 * @property {UserContact} contact - Contact information
 * @property {UserAddress} address - Address information
 * @property {string} nationality - Nationality code
 * @property {UserRegistered} registered - Registration info
 */

// Default user state
export const createEmptyUser = () => ({
  id: null,
  avatar: '',
  avatarMedium: '',
  avatarThumbnail: '',
  name: {
    first: '',
    last: '',
    full: '',
    title: '',
  },
  login: {
    username: '',
    password: '',
  },
  dateOfBirth: {
    date: '',
    age: 0,
  },
  gender: '',
  contact: {
    email: '',
    phone: '',
    cell: '',
  },
  address: {
    street: '',
    city: '',
    state: '',
    country: '',
    postcode: '',
    coordinates: {
      latitude: '',
      longitude: '',
    },
    timezone: {
      offset: '',
      description: '',
    },
  },
  nationality: '',
  registered: {
    date: '',
    age: 0,
  },
});

// Export the factory function instead of undefined User
// If you need a User class or constructor, define it here
// export default User;
