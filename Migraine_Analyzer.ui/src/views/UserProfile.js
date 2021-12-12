import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card, CardBody, CardImg, CardText, CardTitle
} from 'reactstrap';

export default function UserProfile({ user }) {
  return (
    <Card>
      <CardImg className='profileImage' src={user?.imageUrl} />
      <CardBody>
        <CardTitle>Username: {user?.username}</CardTitle>
        <CardText>Name: {user?.firstName} {user?.lastName}</CardText>
        <CardText>Member since {user?.dateCreated}</CardText>
        <CardText>Email: {user?.email}</CardText>
        <Button>Edit</Button>
      </CardBody>
    </Card>
  );
}

UserProfile.propTypes = {
  user: PropTypes.any,
};
