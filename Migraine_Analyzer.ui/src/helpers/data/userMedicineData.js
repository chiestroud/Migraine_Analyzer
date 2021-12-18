import axios from 'axios';
import { apiConfig } from '../apiKeys';

const { apiUrl } = apiConfig;

const getUserMedicine = (userId) => new Promise((resolve, reject) => {
  axios.get(`${apiUrl}/UserMedicine/${userId}`).then((response) => resolve(response.data)).catch(reject);
});

const addUserMedicine = (userObj) => new Promise((resolve, reject) => {
  axios.post(`${apiUrl}/UserMedicine`, userObj).then((response) => resolve(response.data)).catch(reject);
});

export { getUserMedicine, addUserMedicine };
