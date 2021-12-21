import axios from 'axios';
import { apiConfig } from '../apiKeys';

const { apiUrl } = apiConfig;

const getTemp = () => new Promise((resolve, reject) => {
  axios.get(`${apiUrl}/Temp`).then((response) => resolve(response.data)).catch(reject);
});

export default getTemp;
