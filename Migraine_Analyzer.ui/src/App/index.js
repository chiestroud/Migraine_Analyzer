import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import { BrowserRouter as Router } from 'react-router-dom';
import 'firebase/auth';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';
import './App.scss';
import { getSingleUserByGoogleId } from '../helpers/data/userData';

function App() {
  // When you set up firebase add setUser method and change useState to null.
  const [user, setUser] = useState(null);
  // Checking for authenticated users. You must set up firebase authentication for this to work!
  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        authed.getIdToken().then((token) => localStorage.setItem('token', token));
        getSingleUserByGoogleId(authed.uid).then((response) => setUser(response));
      } else {
        setUser(false);
      }
    });
  }, []);
  return (
    <Router>
      <NavBar user={user} setUser={setUser}/>
      <Routes user={user} setUser={setUser}/>
    </Router>
  );
}

export default App;
