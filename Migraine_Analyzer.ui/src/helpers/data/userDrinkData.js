import axios from 'axios';
import { apiConfig } from '../apiKeys';

const { apiUrl } = apiConfig;

const getUserDrinks = (userId) => new Promise((resolve, reject) => {
  axios.get(`${apiUrl}/UserDrink/${userId}`).then((response) => resolve(response.data)).catch(reject);
});

export default getUserDrinks;
