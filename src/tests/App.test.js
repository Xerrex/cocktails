import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders home page', () => {
  render(<App />);
  const title = screen.getByRole("heading", {name:/Expore Coctails/i});
  expect(title).toBeInTheDocument();
});

test('renders Cocktails page', () => {
  render(<App />);
  const title = screen.getByRole("heading", {name:/Expore Coctails/i});
  expect(title).toBeInTheDocument();
});