import React, { useState, useEffect } from 'react';
import getAllUsers from '../helpers/data/userData';

export default function Home() {
  const [users, setUsers] = useState();
  useEffect(() => {
    getAllUsers().then((response) => console.warn(response));
  }, []);
  console.warn(users);
  console.warn(setUsers);
  return (
    <section>
      <header>This is Home Page</header>
    </section>
  );
}
