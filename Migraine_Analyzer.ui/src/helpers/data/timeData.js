import axios from 'axios';
import { apiConfig } from '../apiKeys';

const { apiUrl } = apiConfig;

const getTime = () => new Promise((resolve, reject) => {
  axios.get(`${apiUrl}/Time`).then((response) => resolve(response.data)).catch(reject);
});

export default getTime;
