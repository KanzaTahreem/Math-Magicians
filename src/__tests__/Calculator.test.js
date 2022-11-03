import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

it('renders correctly', () => {
  const calculator = renderer
    .create(<Calculator />)
    .toJSON();
  expect(calculator).toMatchSnapshot();
});
