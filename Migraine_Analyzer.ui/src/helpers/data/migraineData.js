import axios from 'axios';
import { apiConfig } from '../apiKeys';

const { apiUrl } = apiConfig;

const getMigrainesFromUserId = (userId) => new Promise((resolve, reject) => {
  axios.get(`${apiUrl}/Migraines/user/${userId}`).then((response) => resolve(response.data)).catch(reject);
});

const getIntensity = () => new Promise((resolve, reject) => {
  axios.get(`${apiUrl}/Migraines/intensityType`).then((response) => resolve(response.data)).catch(reject);
});

const getWeatherType = () => new Promise((resolve, reject) => {
  axios.get(`${apiUrl}/Migraines/weatherType`).then((response) => resolve(response.data)).catch(reject);
});

const getEmotionType = () => new Promise((resolve, reject) => {
  axios.get(`${apiUrl}/Migraines/emotionType`).then((response) => resolve(response.data)).catch(reject);
});

const getTotalMigraines = (userId) => new Promise((resolve, reject) => {
  axios.get(`${apiUrl}/Migraines/count/${userId}`).then((response) => resolve(response.data)).catch(reject);
});

const getTopMedicine = (userId) => new Promise((resolve, reject) => {
  axios.get(`${apiUrl}/Migraines/topMedicine/${userId}`).then((response) => resolve(response.data)).catch(reject);
});

const getTopFood = (userId) => new Promise((resolve, reject) => {
  axios.get(`${apiUrl}/Migraines/topFood/${userId}`).then((response) => resolve(response.data)).catch(reject);
});

const getTopDrinks = (userId) => new Promise((resolve, reject) => {
  axios.get(`${apiUrl}/Migraines/topDrinks/${userId}`).then((response) => resolve(response.data)).catch(reject);
});

const addNewMigraine = (migraineObj) => new Promise((resolve, reject) => {
  axios.post(`${apiUrl}/Migraines`, migraineObj).then((response) => resolve(response.data)).catch(reject);
});

export {
  getMigrainesFromUserId, getIntensity, getWeatherType, getEmotionType,
  getTotalMigraines, getTopMedicine, getTopFood, getTopDrinks, addNewMigraine
};
