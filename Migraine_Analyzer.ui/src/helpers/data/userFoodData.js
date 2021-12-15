import axios from 'axios';
import { apiConfig } from '../apiKeys';

const { apiUrl } = apiConfig;

const getUserFood = (userId) => new Promise((resolve, reject) => {
  axios.get(`${apiUrl}/UserFood/${userId}`).then((response) => resolve(response.data)).catch(reject);
});

export default getUserFood;
