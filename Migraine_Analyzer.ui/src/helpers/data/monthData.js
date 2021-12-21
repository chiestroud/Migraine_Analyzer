import axios from 'axios';
import { apiConfig } from '../apiKeys';

const { apiUrl } = apiConfig;

const getMonth = () => new Promise((resolve, reject) => {
  axios.get(`${apiUrl}/Month`).then((response) => resolve(response.data)).catch(reject);
});

export default getMonth;
