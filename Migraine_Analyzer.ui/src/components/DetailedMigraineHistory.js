import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { Button, Card, CardText } from 'reactstrap';
import { getDetailedMigraineInfo, getUserInputItemsFromMigraineId } from '../helpers/data/migraineData';
import EditMigraineForm from './forms/EditMigraineForm';

export default function DetailedMigraineHistory({ user }) {
  const [detailedMigraine, setDetailedMigraine] = useState([]);
  const [userInputInfo, setUserInputInfo] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    getDetailedMigraineInfo(id).then((response) => setDetailedMigraine(response));
    getUserInputItemsFromMigraineId(id).then((response) => setUserInputInfo(response));
  }, [showForm]);
  const buttonHandleClick = () => {
    setShowForm((prevState) => !(prevState));
  };
  return (
    <div className="detailed-migraine-info">
      <Button onClick={() => buttonHandleClick()}>{showForm ? 'Close Form' : 'Edit This Migraine'}</Button>
      {showForm
        ? <EditMigraineForm user={user} detailedMigraine={detailedMigraine} showForm={showForm} id={id}/>
        : <><h1 className="detailed-title">Detailed info</h1>
        {detailedMigraine?.map((migraine) => (
          <Card key={id} className="detailed-input">
            <CardText>Date: {migraine.monthsInfo.month} {migraine.dayId}, {migraine.currentYear} & Time of Occurence: {migraine.timeInfo.time}</CardText>
            <CardText>Temperature: {migraine.tempInfo.temp} & Weather: {migraine.weather}</CardText>
            <CardText>Migraine lasted for: {migraine.durationInfo.duration}</CardText>
            <CardText>Intensity: {migraine.intensity}</CardText>
            <CardText>{migraine.vomit ? 'Unfortunately this migraine caused me to throw up' : 'Luckily migraine did not cause me to throw up'}</CardText>
          </Card>
        ))}
        {userInputInfo?.map((input) => (
          <Card key={input.userId} className="detailed-input">
            <CardText>Food ate before migraine: {input.foodInfo.dishName}</CardText>
            <CardText>Drink consumed before migraine: {input.drinkInfo.drinkName}</CardText>
            <CardText>Medicine used to treat migraine: {input.medicineInfo.medicineName}</CardText>
            <CardText>How I felt about the migraine: {input.comment}</CardText>
          </Card>
        ))}</>
      }
    </div>
  );
}

DetailedMigraineHistory.propTypes = {
  user: PropTypes.any,
};
