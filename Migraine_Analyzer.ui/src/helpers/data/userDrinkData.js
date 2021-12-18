import axios from 'axios';
import { apiConfig } from '../apiKeys';

const { apiUrl } = apiConfig;

const getUserDrinks = (userId) => new Promise((resolve, reject) => {
  axios.get(`${apiUrl}/UserDrink/${userId}`).then((response) => resolve(response.data)).catch(reject);
});

const addUserDrink = (userDrinkObj) => new Promise((resolve, reject) => {
  axios.post(`${apiUrl}/UserDrink`, userDrinkObj).then((response) => resolve(response.data)).catch(reject);
});

export { getUserDrinks, addUserDrink };
