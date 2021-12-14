import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import NewMigraineRecord from '../views/NewMigraineRecord';
import MigraineAnalysis from '../views/MigraineAnalysis';
import Home from '../views/Home';
import MigraineHistory from '../views/MigraineHistory';
import UserProfile from '../views/UserProfile';
import PrivateRoute from './PrivateRoute';
import DetailedMigraineHistory from '../components/DetailedMigraineHistory';

export default function Routes({ user, setUser }) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={() => <Home user={user} setUser={setUser} />}/>
        <Route path='/newMigraineForm' component={() => <NewMigraineRecord user={user} />}/>
        <Route path='/migraineHistory' component={() => <MigraineHistory user={user}/>}/>
        <Route path='/migraineAnalysis' component={() => <MigraineAnalysis user={user} />} />
        <Route path='/userInfo' component={() => <UserProfile user={user} />}/>
        <PrivateRoute exact path="/detailedHistory/:id" component={() => <DetailedMigraineHistory user={user} />} user={user}/>
      </Switch>
    </div>
  );
}
Routes.propTypes = {
  user: PropTypes.any,
  setUser: PropTypes.func
};
