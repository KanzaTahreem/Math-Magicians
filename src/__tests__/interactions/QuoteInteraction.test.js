import {
  render, fireEvent, waitFor, screen,
} from '@testing-library/react';
/* import { rest } from 'msw';
import { setupServer } from 'msw/node'; */
import '@testing-library/jest-dom';
import Quote from '../../components/Quote';

/* const server = setupServer(
  rest.get('https://random-math-quote-api.herokuapp.com/', (req, res, ctx) => res(ctx.json({ quote: 'hello there', author: 'Felipe Oyarzo' }))),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close()); */

jest.spyOn(global, 'fetch').mockResolvedValue({
  json: jest.fn().mockResolvedValue({
    author: 'Test Author',
    id: 25,
    quote: 'Test Quote.',
  }),
});

afterEach(() => {
  jest.restoreAllMocks();
});

test('loads and displays Quote', async () => {
  render(<Quote />);
  const button = screen.getByRole('button');
  const quote = screen.getByRole('heading');
  await fireEvent.click(button);
  await waitFor(() => quote);
  expect(quote).toHaveTextContent('hello there - Felipe Oyarzo');
  expect(screen.getByRole('button')).toBeDisabled();
});
