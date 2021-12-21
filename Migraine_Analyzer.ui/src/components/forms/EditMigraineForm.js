import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container, Form, Row, Col, Button, Label, Input, FormGroup,
} from 'reactstrap';
import getDays from '../../helpers/data/dayData';
import getDuration from '../../helpers/data/durationData';
import {
  getEmotionType, getIntensity, getWeatherType, updateMigraine
} from '../../helpers/data/migraineData';
import getMonth from '../../helpers/data/monthData';
import getTemp from '../../helpers/data/tempData';
import getTime from '../../helpers/data/timeData';
import { getUserFood } from '../../helpers/data/userFoodData';
import { getUserDrinks } from '../../helpers/data/userDrinkData';
import { getUserMedicine } from '../../helpers/data/userMedicineData';

export default function EditMigraineForm({
  user, detailedMigraine, showForm, id
}) {
  const [days, setDays] = useState([]);
  const [months, setMonths] = useState([]);
  const [time, setTime] = useState([]);
  const [intensityLevel, setIntensityLevel] = useState([]);
  const [duration, setDuration] = useState([]);
  const [weatherInfo, setWeatherInfo] = useState([]);
  const [temp, setTemp] = useState([]);
  const [emotions, setEmotions] = useState([]);
  const [userFood, setUserFood] = useState([]);
  const [userDrinks, setUserDrinks] = useState([]);
  const [userMedicine, setUserMedicine] = useState([]);
  const [migraineObj, setMigraineObj] = useState({
    userId: user?.id,
    dayId: detailedMigraine[0].dayId || '',
    monthId: detailedMigraine[0].monthId || '',
    currentYear: detailedMigraine[0].currentYear || '',
    timeId: detailedMigraine[0].timeId || '',
    intensity: detailedMigraine[0].intensity || '',
    durationId: detailedMigraine[0].durationId || '',
    weather: detailedMigraine[0].weather || '',
    temperatureId: detailedMigraine[0].temperatureId || '',
    emotion: detailedMigraine[0].emotion || '',
    foodId: detailedMigraine[0].foodId || '',
    drinkId: detailedMigraine[0].drinkId || '',
    medicineId: detailedMigraine[0].medicineId || '',
    comment: detailedMigraine[0].comment || '',
    vomit: detailedMigraine[0].vomit || '',
    logDate: detailedMigraine[0].logDate || '',
  });

  useEffect(() => {
    getDays().then((response) => setDays(response));
    getMonth().then((response) => setMonths(response));
    getTime().then((response) => setTime(response));
    getIntensity().then((response) => setIntensityLevel(response));
    getDuration().then((response) => setDuration(response));
    getWeatherType().then((response) => setWeatherInfo(response));
    getTemp().then((response) => setTemp(response));
    getEmotionType().then((response) => setEmotions(response));
    getUserFood(user?.id).then((response) => setUserFood(response));
    getUserDrinks(user?.id).then((response) => setUserDrinks(response));
    getUserMedicine(user?.id).then((response) => setUserMedicine(response));
  }, []);

  const handleInputChange = (e) => {
    setMigraineObj((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.name === 'vomit' ? e.target.checked : e.target.value
    }));
  };

  const handleNumberInputChange = (e) => {
    setMigraineObj((prevState) => ({
      ...prevState,
      [e.target.name]: Number(e.target.value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMigraine(id, migraineObj).then((response) => setMigraineObj(response));
  };

  return (
    <Container className="form-container">
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <h1>{showForm ? 'Edit Your Migraine' : 'Record Your Migraines'}</h1>
          </Col>
        </Row>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for="day">DAY</Label>
              <Input type="select" name="dayId" id="dayId" value={migraineObj.dayId} onChange={handleNumberInputChange} required>
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
              <Input type="select" name="monthId" id="month" value={migraineObj.monthId} onChange={handleNumberInputChange}>
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
              <Input type="text" name="currentYear" id="currentYear" value={migraineObj.currentYear} onChange={handleNumberInputChange}/>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for="time">TIME</Label>
              <Input type="select" name="timeId" id="time" value={migraineObj.timeId} onChange={handleNumberInputChange}>
                <option value="">Select Time</option>
                {time.map((tm) => (
                  <option value={tm.id} key={tm.id}>{tm.time}</option>
                ))}
              </Input>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="intensity">INTENSITY</Label>
              <Input type="select" name="intensity" id="intensity" value={migraineObj.intensity} onChange={handleInputChange}>
                <option value="">Select  Intensity</option>
                {intensityLevel.map((x, index) => (
                  <option value={x} key={index}>{x}</option>
                ))}
              </Input>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="duration">DURATION</Label>
              <Input type="select" name="durationId" id="duration" value={migraineObj.durationId} onChange={handleNumberInputChange}>
                <option value="">Select Duration</option>
                {duration.map((dur) => (
                  <option value={dur.id} key={dur.id}>{dur.duration}</option>
                ))}
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for="weather">WEATHER</Label>
              <Input type="select" name="weather" id="weather" value={migraineObj.weather} onChange={handleInputChange}>
                <option value="">Select Weather</option>
                {weatherInfo.map((w, index) => (
                  <option value={w} key={index}>{w}</option>
                ))}
              </Input>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="temperature">TEMPERATURE</Label>
              <Input type="select" name="temperatureId" id="temperature" value={migraineObj.temperatureId} onChange={handleNumberInputChange}>
                <option value="">Select Temperature</option>
                {temp.map((tem) => (
                  <option value={tem.id} key={tem.id}>{tem.temp}</option>
                ))}
              </Input>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="emotion">EMOTION</Label>
              <Input type="select" name="emotion" id="emotion" value={migraineObj.emotion} onChange={handleInputChange}>
                <option value="">Select Emotion</option>
                {emotions.map((emo, index) => (
                  <option value={emo} key={index}>{emo}</option>
                ))}
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for="food">FOOD</Label>
              <Input type="select" name="foodId" id="food" value={migraineObj.foodId} onChange={handleNumberInputChange}>
                <option value="">Select Food</option>
                {userFood.map((food) => (
                  <option value={food.id} key={food.id}>{food.dishName}</option>
                ))}
              </Input>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="drink">DRINK</Label>
              <Input type="select" name="drinkId" id="drink" value={migraineObj.drinkId} onChange={handleNumberInputChange}>
                <option value="">Select Drink</option>
                {userDrinks.map((drink) => (
                  <option value={drink.id} key={drink.id}>{drink.drinkName}</option>
                ))}
              </Input>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="medicine">MEDICINE</Label>
              <Input
                type="select" name="medicineId" id="medicine" value={migraineObj.medicineId} onChange={handleNumberInputChange}>
                <option value="">Select Medicine</option>
                {userMedicine.map((med) => (
                  <option value={med.id} key={med.id}>{med.medicineName}</option>
                ))}
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="exampleText">
            COMMENTS
          </Label>
          <Input id="comment" name="comment" type="textarea" value={migraineObj.comment} onChange={handleInputChange} />
        </FormGroup>
        <FormGroup check>
          {(migraineObj.vomit === true)
            ? <Input type="checkbox" defaultChecked id="vomit" name="vomit" value={migraineObj.vomit} onChange={handleInputChange} />
            : <Input type="checkbox" id="vomit" name="vomit" value={migraineObj.vomit} onChange={handleInputChange}/>
          }
          <Label check>
            Vomited?
          </Label>
        </FormGroup>
        <Button className="mt-2">Update Migraine</Button>
      </Form>
    </Container>
  );
}

EditMigraineForm.propTypes = {
  user: PropTypes.any,
  detailedMigraine: PropTypes.any,
  showForm: PropTypes.any,
  id: PropTypes.any
};
