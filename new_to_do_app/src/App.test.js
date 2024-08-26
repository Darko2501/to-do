import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MY TO-DO APP title', () => {
  render(<App />);
  const titleElement = screen.getByText(/MY TO-DO APP/i);
  expect(titleElement).toBeInTheDocument();
});
