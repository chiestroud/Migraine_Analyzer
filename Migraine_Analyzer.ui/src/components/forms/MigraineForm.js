import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container, Form, Row, Col, Button, Label, Input, FormGroup,
} from 'reactstrap';
import getDays from '../../helpers/data/dayData';
import getDuration from '../../helpers/data/durationData';
import { getEmotionType, getIntensity, getWeatherType } from '../../helpers/data/migraineData';
import getMonth from '../../helpers/data/monthData';
import getTemp from '../../helpers/data/tempData';
import getTime from '../../helpers/data/timeData';
import getUserFood from '../../helpers/data/userFoodData';
import getUserDrinks from '../../helpers/data/userDrinkData';
import getUserMedicine from '../../helpers/data/userMedicineData';

export default function MigraineForm({ user }) {
  const [days, setDays] = useState([]);
  const [months, setMonths] = useState([]);
  const [time, setTime] = useState([]);
  const [intensity, setIntensity] = useState([]);
  const [duration, setDuration] = useState([]);
  const [weather, setWeather] = useState([]);
  const [temp, setTemp] = useState([]);
  const [emotions, setEmotions] = useState([]);
  const [userFood, setUserFood] = useState([]);
  const [userDrinks, setUserDrinks] = useState([]);
  const [userMedicine, setUserMedicine] = useState([]);
  const [migraineObj, setMigraineObj] = useState({
    dayId: Number(''),
    monthId: Number(''),
    currentYear: Number(''),
    time: '',
    intensity: '',
    duration: '',
    weather: '',
    temprature: '',
    emotion: '',
    food: '',
    drink: '',
    medicine: '',
    comment: '',
    vomit: false
  });

  useEffect(() => {
    getDays().then((response) => setDays(response));
    getMonth().then((response) => setMonths(response));
    getTime().then((response) => setTime(response));
    getIntensity().then((response) => setIntensity(response));
    getDuration().then((response) => setDuration(response));
    getWeatherType().then((response) => setWeather(response));
    getTemp().then((response) => setTemp(response));
    getEmotionType().then((response) => setEmotions(response));
    getUserFood(user?.id).then((response) => setUserFood(response));
    getUserDrinks(user?.id).then((response) => setUserDrinks(response));
    getUserMedicine(user?.id).then((response) => setUserMedicine(response));
  }, []);

  const handleInputChange = (e) => {
    setMigraineObj((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  return (
    <Container>
      <Form>
        <Row>
          <Col>
            <h1>Record Your Migraines</h1>
          </Col>
        </Row>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for="day">DAY</Label>
              <Input type="select" name="dayId" id="dayId" value={migraineObj.dayId} onChange={handleInputChange} required>
                <option value="">Select Day</option>
              {days?.map((day) => (
                <option value={day.id} key={day.id}>{day.day}</option>
              ))}
              </Input>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="month">MONTH</Label>
              <Input type="select" name="monthId" id="month" value={migraineObj.monthId} onChange={handleInputChange}>
                <option value="">Select Month</option>
                {months?.map((month) => (
                  <option value={month.id} key={month.id}>{month.month}</option>
                ))}
              </Input>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="year">YEAR</Label>
              <Input type="text" name="currentYear" id="currentYear" value={migraineObj.currentYear} onChange={handleInputChange}/>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for="time">TIME</Label>
              <Input type="select" name="select" id="time">
                <option value="">Select Time</option>
                {time.map((tm) => (
                  <option key={tm.id}>{tm.time}</option>
                ))}
              </Input>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="intensity">INTENSITY</Label>
              <Input type="select" name="select" id="intensity">
                <option value="">Select  Intensity</option>
                {intensity.map((x, index) => (
                  <option key={index}>{x}</option>
                ))}
              </Input>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="duration">DURATION</Label>
              <Input type="select" name="select" id="duration">
                <option value="">Select Duration</option>
                {duration.map((dur) => (
                  <option key={dur.id}>{dur.duration}</option>
                ))}
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for="weather">WEATHER</Label>
              <Input type="select" name="select" id="weather">
                <option value="">Select Weather</option>
                {weather.map((we, index) => (
                  <option key={index}>{we}</option>
                ))}
              </Input>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="temperature">TEMPERATURE</Label>
              <Input type="select" name="select" id="temperature">
                <option value="">Select Temperature</option>
                {temp.map((tem) => (
                  <option key={tem.id}>{tem.temp}</option>
                ))}
              </Input>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="emotion">EMOTION</Label>
              <Input type="select" name="select" id="emotion">
                <option value="">Select Emotion</option>
                {emotions.map((emotion, index) => (
                  <option key={index}>{emotion}</option>
                ))}
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for="food">FOOD</Label>
              <Input type="select" name="select" id="food">
                <option value="">Select Food</option>
                {userFood.map((food) => (
                  <option key={food.id}>{food.dishName}</option>
                ))}
              </Input>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="drink">DRINK</Label>
              <Input type="select" name="select" id="drink">
                <option value="">Select Drink</option>
                {userDrinks.map((drink) => (
                  <option key={drink.id}>{drink.drinkName}</option>
                ))}
              </Input>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="medicine">MEDICINE</Label>
              <Input type="select" name="select" id="medicine">
                <option value="">Select Medicine</option>
                {userMedicine.map((med) => (
                  <option key={med.id}>{med.medicineName}</option>
                ))}
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="exampleText">
            COMMENTS
          </Label>
          <Input
            id="comment"
            name="text"
            type="textarea"
          />
        </FormGroup>
        <FormGroup check>
          <Input type="checkbox" />
          <Label check>
            Vomited?
          </Label>
        </FormGroup>
        <Button>Register Migraine</Button>
      </Form>
    </Container>
  );
}

MigraineForm.propTypes = {
  user: PropTypes.any,
};
