import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Col, Container, Form, FormGroup, Input, Label, Row
} from 'reactstrap';

export default function UserForm({ userObject, setUserObject, handleSubmit }) {
  const handleInputChange = (e) => {
    setUserObject((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <Container>
      <Form>
        <Row>
          <Col>
            <h1>Edit Your Profile</h1>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="username">USERNAME</Label>
              <Input type="text" name="username" id="username" defaultValue={userObject.username} onChange={handleInputChange}/>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="year">MIGRAIN START YEAR</Label>
              <Input type="number" name="birthYear" id="birthYear" defaultValue={userObject.birthYear} onChange={handleInputChange}/>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="firstName">FIRSTNAME</Label>
              <Input type="text" name="firstName" id="firstName" defaultValue={userObject.firstName} onChange={handleInputChange}/>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="lastName">LASTNAME</Label>
              <Input type="text" name="lastName" id="lastName" defaultValue={userObject.lastName} onChange={handleInputChange}/>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={12}>
            <FormGroup>
              <Label for="email">EMAIL ADDRESS</Label>
              <Input type="text" name="email" id="email" defaultValue={userObject.email} onChange={handleInputChange}/>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={12}>
            <FormGroup>
              <Label for="imageUrl">PROFILE PICTURE</Label>
              <Input type="url" name="imageUrl" id="imageUrl" defaultValue={userObject.imageUrl} onChange={handleInputChange}/>
            </FormGroup>
          </Col>
        </Row>
        <Button onClick={() => handleSubmit()}>Update User Info</Button>
      </Form>
    </Container>
  );
}

UserForm.propTypes = {
  userObject: PropTypes.any,
  setUserObject: PropTypes.func,
  handleSubmit: PropTypes.func,
};
