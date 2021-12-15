import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card, CardBody, CardImg, CardText, CardTitle
} from 'reactstrap';
import UserForm from '../components/forms/UserForm';
import { getSingleUserByUserId, updateUser } from '../helpers/data/userData';

export default function UserProfile({ user }) {
  const [openForm, setOpenForm] = useState(false);
  const [userObject, setUserObject] = useState({
    username: user?.username || '',
    birthYear: user?.birthYear || Number(''),
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    imageUrl: user?.imageUrl || '',
    dateCreated: user?.dateCreated,
    googleId: user?.googleId,
  });

  const handleSubmit = () => {
    updateUser(user?.id, userObject).then((resp) => setUserObject(resp));
  };

  useEffect(() => {
    getSingleUserByUserId(user?.id).then((response) => setUserObject(response));
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    setOpenForm((prevState) => !(prevState));
  };

  return (
    <Card>
      <CardImg className='profileImage' src={user?.imageUrl} />
      <CardBody>
        <CardTitle>Username: {userObject.username}</CardTitle>
        <CardText>Name: {userObject.firstName} {userObject.lastName}</CardText>
        <CardText>Member since {userObject.dateCreated}</CardText>
        <CardText>Email: {userObject.email}</CardText>
        <Button onClick={handleClick}>{openForm ? 'Close Form' : 'Edit'}</Button>
        {openForm
          && <UserForm userObject={userObject} setUserObject={setUserObject} handleSubmit={handleSubmit}/>}
      </CardBody>
    </Card>
  );
}

UserProfile.propTypes = {
  user: PropTypes.any,
};
