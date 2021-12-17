import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import {
  getTopDrinks, getTopFood, getTopMedicine, getTotalMigraines
} from '../helpers/data/migraineData';

export default function MigraineAnalysis({ user }) {
  const [totalCount, setTotalCount] = useState([]);
  const [medicine, setMedicine] = useState([]);
  const [food, setFood] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    getTotalMigraines(user?.id).then((response) => setTotalCount(response));
    getTopMedicine(user?.id).then((response) => setMedicine(response));
    getTopFood(user?.id).then((response) => setFood(response));
    getTopDrinks(user?.id).then((response) => setDrinks(response));
  }, []);
  return (
    <>
    <section>
      <h1>{user?.firstName}&apos;s Migraine Analysis</h1>
      <h2>Total Migraine Count</h2>
      <h2>{totalCount.Total}</h2>
    </section>
    <Row>
      <Col md={4}>
        <h3>Top Medicines Causing Migraines</h3>
        {medicine.map((med, index) => (
          <p key={index + 1}>{index + 1}. {med.medicineName}</p>
        ))}
      </Col>
      <Col md={4}>
        <h3>Top Food Causing Migraines</h3>
        {food.map((fd, index) => (
          <p key={index + 1}>{index + 1}. {fd.dishName}</p>
        ))}
      </Col>
      <Col md={4}>
        <h3>Top Drinks Causing Migraines</h3>
        {drinks.map((drink, index) => (
          <p key={index + 1}>{index + 1}. {drink.drinkName}</p>
        ))}
      </Col>
    </Row>
    </>
  );
}

MigraineAnalysis.propTypes = {
  user: PropTypes.any
};
