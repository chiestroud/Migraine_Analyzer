import propTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FirstPage from '../views/FirstPage';
import Home from '../views/Home';
import NotFound from '../views/NotFound';
import SecondPage from '../views/SecondPage';
import UserProfile from '../views/UserProfile';

export default function Routes({ user, setUser }) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={() => <Home user={user} setUser={setUser} />}/>
        <Route path='/first' component={FirstPage}/>
        <Route path='/second' component={SecondPage} />
        <Route path='/userInfo' component={() => <UserProfile user={user} />}/>
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}
Routes.propTypes = {
  user: propTypes.any,
  setUser: propTypes.func
};
