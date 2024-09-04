// src/api.js

import axios from 'axios';

// Create an instance of Axios
const api = axios.create({
  baseURL: 'http://localhost:5000' // Base URL for your API
});

// Add a request interceptor to include the JWT token in headers
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // Get the token from local storage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Attach the token to request headers
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;
