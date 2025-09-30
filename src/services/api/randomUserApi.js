import ApiClient from './apiClient';
import { API_BASE_URL } from '../../utils/constants';
import { capitalizeWords } from '../../utils/formatters';

class RandomUserAPI {
  constructor() {
    this.api = new ApiClient(API_BASE_URL);
  }

  /**
   * Fetch a random user from the API
   * @param {string} gender - Gender preference ('male' or 'female')
   * @param {string} nationality - Nationality code (optional)
   * @returns {Promise<Object>} Transformed user object
   */
  async getUser(gender, nationality = null) {
    const params = { gender };
    if (nationality) {
      params.nat = nationality;
    }

    const response = await this.api.get('', { params });
    return this.transformUser(response.data.results[0]);
  }

  /**
   * Fetch multiple random users
   * @param {number} count - Number of users to fetch
   * @param {string} gender - Gender preference
   * @returns {Promise<Array>} Array of transformed user objects
   */
  async getUsers(count = 5, gender = null) {
    const params = { results: count };
    if (gender) {
      params.gender = gender;
    }

    const response = await this.api.get('', { params });
    return response.data.results.map(user => this.transformUser(user));
  }

  /**
   * Transform raw API response to our user format
   * @param {Object} rawUser - Raw user data from API
   * @returns {Object} Transformed user object
   */
  transformUser(rawUser) {
    return {
      id: rawUser.login.uuid,
      avatar: rawUser.picture.large,
      avatarMedium: rawUser.picture.medium,
      avatarThumbnail: rawUser.picture.thumbnail,
      name: {
        first: capitalizeWords(rawUser.name.first),
        last: capitalizeWords(rawUser.name.last),
        full: `${capitalizeWords(rawUser.name.first)} ${capitalizeWords(rawUser.name.last)}`,
        title: capitalizeWords(rawUser.name.title),
      },
      login: {
        username: rawUser.login.username,
        password: rawUser.login.password,
      },
      dateOfBirth: {
        date: rawUser.dob.date,
        age: rawUser.dob.age,
      },
      gender: rawUser.gender,
      contact: {
        email: rawUser.email.toLowerCase(),
        phone: rawUser.phone,
        cell: rawUser.cell,
      },
      address: {
        street: `${rawUser.location.street.number} ${capitalizeWords(rawUser.location.street.name)}`,
        city: capitalizeWords(rawUser.location.city),
        state: capitalizeWords(rawUser.location.state),
        country: capitalizeWords(rawUser.location.country),
        postcode: rawUser.location.postcode,
        coordinates: {
          latitude: rawUser.location.coordinates.latitude,
          longitude: rawUser.location.coordinates.longitude,
        },
        timezone: {
          offset: rawUser.location.timezone.offset,
          description: rawUser.location.timezone.description,
        },
      },
      nationality: rawUser.nat,
      registered: {
        date: rawUser.registered.date,
        age: rawUser.registered.age,
      },
    };
  }
}

// Create singleton instance
const randomUserApi = new RandomUserAPI();
export default randomUserApi;