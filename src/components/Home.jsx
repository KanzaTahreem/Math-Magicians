import React from 'react';

const Home = () => (
  <section className="main-container">
    <div className="description">
      <h2 className="subtitle">Welcome to our page!</h2>
      <p className="text">
        <b><i>Math magicians</i></b>
        is a website for all fans of mathematics.
        It is a Single Page App (SPA) that allows users to:
      </p>
      <ul>
        <li className="listItem">Make simple calculations.</li>
        <li className="listItem">Read a random math-related quote.</li>
      </ul>
      <p>
        The app is developed using a
        <i>React</i>
        environment, and styled through React basic styling.
      </p>
      <button type="button" className="source-code"> Source Code </button>
      <button type="button" className="live-link">View Live</button>
    </div>
    <div className="img" />
  </section>
);

export default Home;
