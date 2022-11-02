import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../components/Home';

it('renders correctly', () => {
  const homePage = renderer
    .create(<Home />)
    .toJSON();
  expect(homePage).toMatchSnapshot();
});
