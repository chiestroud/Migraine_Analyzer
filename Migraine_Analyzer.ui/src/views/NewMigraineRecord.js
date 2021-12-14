import React from 'react';
import PropTypes from 'prop-types';

export default function NewMigraineRecord({ user }) {
  return (
    <section>
      <header>This is FirstPage page</header>
      <h1>{user?.username}</h1>
    </section>
  );
}

NewMigraineRecord.propTypes = {
  user: PropTypes.any,
};
