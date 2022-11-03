import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../../components/Home';

test('loads and displays Homepage', async () => {
  render(<Home />);
  const button = screen.getByText('Source Code');
  const homePage = screen.getByRole('heading');
  await fireEvent.click(button);
  await homePage;

  expect(homePage).toHaveTextContent('Welcome to our page!');
  expect(button).not.toBeDisabled();
});
