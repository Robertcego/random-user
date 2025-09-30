import axios from 'axios';
import { ERROR_MESSAGES } from '../../utils/constants';

class ApiClient {
  constructor(baseURL) {
    this.client = axios.create({
      baseURL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  setupInterceptors() {
    // Request interceptor
    this.client.interceptors.request.use(
      (config) => {
        // Only log in development
        if (process.env.NODE_ENV === 'development') {
          console.log('API Request:', config.url);
        }
        return config;
      },
      (error) => {
        if (process.env.NODE_ENV === 'development') {
          console.error('Request Error:', error);
        }
        return Promise.reject(error);
      }
    );

    // Response interceptor
    this.client.interceptors.response.use(
      (response) => {
        if (process.env.NODE_ENV === 'development') {
          console.log('API Response:', response.status);
        }
        return response;
      },
      (error) => {
        if (process.env.NODE_ENV === 'development') {
          console.error('Response Error:', error);
        }
        
        if (error.code === 'ECONNABORTED') {
          error.message = 'Request timeout. Please try again.';
        } else if (!error.response) {
          error.message = ERROR_MESSAGES.NETWORK_ERROR;
        } else {
          error.message = ERROR_MESSAGES.API_ERROR;
        }
        
        return Promise.reject(error);
      }
    );
  }

  async get(url, config = {}) {
    const response = await this.client.get(url, config);
    return response;
  }

  async post(url, data, config = {}) {
    const response = await this.client.post(url, data, config);
    return response;
  }
}

export default ApiClient;