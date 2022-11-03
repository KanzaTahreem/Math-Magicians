import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../../components/Navbar';

describe('Navbar', () => {
  beforeEach(async () => {
    render(<Router><Navbar /></Router>);
  });

  test('should be displayed', () => {
    const heading = screen.getByTestId('title');
    expect(heading).toHaveTextContent('Math Magicians');
  });

  test('should have 3 links', () => {
    const navBarLinks = screen.getByTestId('nav-links');
    expect(navBarLinks.querySelectorAll('a').length).toBe(3);
  });
});
