import firebase from 'firebase/app';
import axios from 'axios';
import { createUser } from './data/userData';

axios.interceptors.request.use((request) => {
  const token = localStorage.getItem('token');

  if (token != null) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
}, (err) => Promise.reject(err));

const signInUser = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((user) => {
    const u = user.user;
    if (user.additionalUserInfo?.isNewUser) {
      const userInfo = {
        imageUrl: u?.photoURL,
        dateCreated: new Date(),
        firstName: u?.displayName.split(' ')[0],
        lastName: u?.displayName.split(' ')[1],
        username: u?.email.split('@gmail.com')[0],
        email: u?.email,
        birthYear: 0,
        googleId: u?.uid
      };
      createUser(userInfo);
      window.location.href = '/';
    }
  });
};
const signOutUser = () => new Promise((resolve, reject) => {
  firebase.auth().signOut().then(resolve).catch(reject);
});
export { signInUser, signOutUser };
