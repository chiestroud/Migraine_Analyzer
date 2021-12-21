import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import {
  getMigraineCountPerYear,
  getTopDrinks, getTopFood, getTopMedicine, getTotalMigraines
} from '../helpers/data/migraineData';

export default function MigraineAnalysis({ user }) {
  const [totalCount, setTotalCount] = useState([]);
  const [medicine, setMedicine] = useState([]);
  const [food, setFood] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [yearlyMigraines, setYearlyMigraines] = useState([]);

  useEffect(() => {
    getTotalMigraines(user?.id).then((response) => setTotalCount(response));
    getTopMedicine(user?.id).then((response) => setMedicine(response));
    getTopFood(user?.id).then((response) => setFood(response));
    getTopDrinks(user?.id).then((response) => setDrinks(response));
    getMigraineCountPerYear(user?.id).then((response) => setYearlyMigraines(response));
  }, []);

  return (
    <>
    <section className="form-container">
      <h1>{user?.firstName}&apos;s Migraine Analysis</h1>
      <h2>Total Migraine Count</h2>
      <h2>{totalCount.Total}</h2>
    </section>
    <div className="top-3-container">
      <Row className="analysis-container m-3">
        <Col md={4}>
          <h3>Top Medicines Used to Treat Migraines</h3>
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
      </div>
      <div className="total-per-year">
        <h1>Total Migraines Per Year</h1>
        {yearlyMigraines.map((migraines, index) => (
          <h1 key={index}>{migraines.currentYear}: {migraines.migraineCount} migraines</h1>
        ))}
      </div>
    </>
  );
}

MigraineAnalysis.propTypes = {
  user: PropTypes.any
};
