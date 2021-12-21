import React from 'react';
import PropTypes from 'prop-types';
import MigraineForm from '../components/forms/MigraineForm';

export default function NewMigraineRecord({ user }) {
  return (
    <section className="form-container">
      <MigraineForm user={user} />
    </section>
  );
}

NewMigraineRecord.propTypes = {
  user: PropTypes.any,
};
