import React from 'react';
import { Card, CardImg } from 'reactstrap';

export default function Home() {
  return (
    <section className="home-view">
      <article className="home-container">
        <div className="home-words-container">
          <header className="header-words">Migraine Analyzer</header>
          <h1>Having migraines?</h1>
          <h2>Let&apos;s take a look at your migraine trends!</h2>
        </div>
        <Card className="image-container">
          <CardImg className='medicine-pic' src="https://images.unsplash.com/photo-1577401132921-cb39bb0adcff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
        </Card>
      </article>
    </section>
  );
}
