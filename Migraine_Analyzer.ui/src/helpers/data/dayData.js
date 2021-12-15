import axios from 'axios';
import { apiConfig } from '../apiKeys';

const { apiUrl } = apiConfig;

const getDays = () => new Promise((resolve, reject) => {
  axios.get(`${apiUrl}/Day`).then((response) => resolve(response.data)).catch(reject);
});

export default getDays;
