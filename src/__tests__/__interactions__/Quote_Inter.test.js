import {
  render, fireEvent, waitFor, screen,
} from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import '@testing-library/jest-dom';
import Quote from '../../components/Quote';

const server = setupServer(
  rest.get('https://random-math-quote-api.herokuapp.com/', (req, res, ctx) => res(ctx.json({ quote: 'hello there', author: 'Felipe Oyarzo' }))),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('loads the quote component and displays Quote on button click', async () => {
  render(<Quote />);
  const button = screen.getByText('Generate Quote');
  const quote = screen.getByRole('heading');
  await fireEvent.click(button);
  await waitFor(() => expect(quote).toHaveTextContent('"hello there" - Felipe Oyarzo'));
  expect(screen.getByRole('button')).not.toBeDisabled();
});
