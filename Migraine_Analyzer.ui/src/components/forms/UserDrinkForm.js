import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Form, Label, Input, Button
} from 'reactstrap';
import { addUserDrink } from '../../helpers/data/userDrinkData';

export default function UserDrinkForm({ user }) {
  const [userDrinks, setUserDrinks] = useState({
    userId: user?.id,
    drinkName: ''
  });
  const handleInputChange = (e) => {
    setUserDrinks((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUserDrink(userDrinks).then((response) => setUserDrinks(response));
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label for="drink">New Drink</Label>
        <Input
          id="drink"
          name="drinkName"
          placeholder="Water"
          value={userDrinks.drinkName}
          onChange={handleInputChange}
          type="text"
        />
        <Button>Submit</Button>
      </Form>
    </>
  );
}

UserDrinkForm.propTypes = {
  user: PropTypes.any,
};
