import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { CardLink, Table } from 'reactstrap';
import { getMigrainesFromUserId } from '../helpers/data/migraineData';

export default function MigraineHistory({ user }) {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    getMigrainesFromUserId(user?.id).then((response) => setRecords(response));
  }, []);

  const history = useHistory();
  const handleClick = (id) => {
    history.push(`/detailedHistory/${id}`);
  };

  return (
    <section className="form-container">
      <h1>{user?.firstName}&apos;s Migraine History</h1>
        <Table striped bordered className='migraine-history-table table-dark'>
          <tbody className='migraine-history-card'>
            <tr>
              <th>Date</th>
              <th>Intensity</th>
              <th>Details</th>
            </tr>
            {records?.map((record) => (
              <tr key={record.id}>
                <td>{record.monthId}/{record.dayId}/{record.currentYear}</td>
                <td>{record.intensity}</td>
                <td><CardLink href='#' onClick={() => handleClick(record.id)}>View Details / Edit</CardLink></td>
              </tr>
            ))}
          </tbody>
        </Table>
    </section>
  );
}

MigraineHistory.propTypes = {
  user: PropTypes.any,
};
