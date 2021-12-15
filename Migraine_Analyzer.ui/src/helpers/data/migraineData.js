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

export {
  getMigrainesFromUserId, getIntensity, getWeatherType, getEmotionType
};
