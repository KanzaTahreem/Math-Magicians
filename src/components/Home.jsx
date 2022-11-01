import React from 'react';
import { ExternalLink } from 'react-external-link';
import '../stylesheets/Home.css';
import gif from '../images/math.gif';

const Home = () => (
  <section className="home-container">
    <div>
      <h2 className="subtitle">Welcome to our page!</h2>
      <div className="description">
        <p className="text">
          <b>Math magicians</b>
          {' '}
          is a website for all fans of mathematics.
          <br />
          It is a Single Page App (SPA) that allows users to:
        </p>
        <ul>
          <li className="listItem">Make simple calculations.</li>
          <li className="listItem">Read a random math-related quote.</li>
        </ul>
        <p>
          The app is developed using a
          {' '}
          <i>React,</i>
          {' '}
          and styled through
          {' '}
          <i>React basic styling.</i>
          {' '}
          Navigation is made possible through
          {' '}
          <i>React Router.</i>
        </p>
      </div>

      <ExternalLink href="https://github.com/KanzaTahreem/Math-Magicians" className="external-link">
        Source Code
      </ExternalLink>

      <ExternalLink href="https://kanzatahreem.github.io/Math-Magicians/" className="external-link">
        View Live
      </ExternalLink>

    </div>
    <div className="home-img">
      <img src={gif} alt="math" />
    </div>
  </section>
);

export default Home;
