import axios from 'axios';
import { apiConfig } from '../apiKeys';

const { apiUrl } = apiConfig;

const getUserMedicine = (userId) => new Promise((resolve, reject) => {
  axios.get(`${apiUrl}/userMedicine/${userId}`).then((response) => resolve(response.data)).catch(reject);
});

export default getUserMedicine;
