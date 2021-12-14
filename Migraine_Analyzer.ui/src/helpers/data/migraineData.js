import axios from 'axios';
import { apiConfig } from '../apiKeys';

const { apiUrl } = apiConfig;

const getMigrainesFromUserId = (userId) => new Promise((resolve, reject) => {
  axios.get(`${apiUrl}/Migraines/user/${userId}`).then((response) => resolve(response.data)).catch(reject);
});

export default getMigrainesFromUserId;
