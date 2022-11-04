import React from 'react';
import { ExternalLink } from 'react-external-link';
import { FaGithub } from 'react-icons/fa';
import { RiShareBoxFill } from 'react-icons/ri';
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
          The app is developed using
          {' '}
          <i>React,</i>
          {' '}
          and styled through the
          {' '}
          <i>React basic styling.</i>
          {' '}
          Navigation is made possible through
          {' '}
          <i>React Router.</i>
        </p>
      </div>

      <div className="external-links">
        <ExternalLink href="https://github.com/KanzaTahreem/Math-Magicians">
          Source Code
          <FaGithub />
        </ExternalLink>

        <ExternalLink href="https://react-math-magician.netlify.app/">
          View Live
          <RiShareBoxFill />
        </ExternalLink>
      </div>

    </div>
    <div className="home-img">
      <img src={gif} alt="math" />
    </div>
  </section>
);

export default Home;
