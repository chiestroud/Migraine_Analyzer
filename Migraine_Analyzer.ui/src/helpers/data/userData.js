import axios from 'axios';
import { apiConfig } from '../apiKeys';

const { apiUrl } = apiConfig;

// get all users for testing database connection
const getAllUsers = () => new Promise((resolve, reject) => {
  axios.get(`${apiUrl}/Users`).then((response) => resolve(response.data)).catch(reject);
});

export default getAllUsers;
