import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Form, Label, Input, Button
} from 'reactstrap';
import { addUserMedicine } from '../../helpers/data/userMedicineData';

export default function UserMedicineForm({ user }) {
  const [userMedicine, setUserMedicine] = useState({
    userId: user?.id,
    medicineName: ''
  });

  const handleInputChange = (e) => {
    setUserMedicine((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUserMedicine(userMedicine).then((response) => setUserMedicine(response));
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label for="medicine">New Medicine</Label>
        <Input
          id="medicine"
          name="medicineName"
          placeholder='Advil'
          value={userMedicine.medicineName}
          onChange={handleInputChange}
          type="text"
        />
        <Button>Submit</Button>
      </Form>
    </>
  );
}

UserMedicineForm.propTypes = {
  user: PropTypes.any
};
