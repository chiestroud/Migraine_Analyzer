import axios from 'axios';
import { apiConfig } from '../apiKeys';

const { apiUrl } = apiConfig;

const getDuration = () => new Promise((resolve, reject) => {
  axios.get(`${apiUrl}/Duration`).then((response) => resolve(response.data)).catch(reject);
});

export default getDuration;
