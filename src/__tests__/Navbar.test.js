import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar from '../components/Navbar';

it('renders correctly', () => {
  const navbar = renderer
    .create(<Router><Navbar /></Router>)
    .toJSON();
  expect(navbar).toMatchSnapshot();
});
