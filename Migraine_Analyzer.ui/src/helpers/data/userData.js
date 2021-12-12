import axios from 'axios';
import { apiConfig } from '../apiKeys';

const { apiUrl } = apiConfig;

// get all users for testing database connection
const getAllUsers = () => new Promise((resolve, reject) => {
  axios.get(`${apiUrl}/Users`).then((response) => resolve(response.data)).catch(reject);
});

const createUser = (userInfoObj) => new Promise((resolve, reject) => {
  axios.post(`${apiUrl}/Users`, userInfoObj).then((response) => resolve(response.data)).catch(reject);
});

const getSingleUserByGoogleId = (id) => new Promise((resolve, reject) => {
  axios.get(`${apiUrl}/Users/googleId/${id}`).then((response) => resolve(response.data)).catch(reject);
});

export { getAllUsers, createUser, getSingleUserByGoogleId };
