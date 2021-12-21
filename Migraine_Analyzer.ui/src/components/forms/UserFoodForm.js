import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Form, Label, Input, Button
} from 'reactstrap';
import { addUserFood } from '../../helpers/data/userFoodData';

export default function UserFoodForm({ user }) {
  const [userFood, setUserFood] = useState({
    userId: user?.id,
    dishName: ''
  });

  const handleInputChange = (e) => {
    setUserFood((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUserFood(userFood).then((response) => setUserFood(response));
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label for="food">New Dish</Label>
        <Input
          id="food"
          name="dishName"
          placeholder="Pasta"
          value={userFood.dishName}
          onChange={handleInputChange}
          type="text"
        />
        <Button>Submit</Button>
      </Form>
    </>
  );
}

UserFoodForm.propTypes = {
  user: PropTypes.any
};
