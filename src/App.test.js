import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio sections', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /jae kim builds practical software/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /selected work/i })).toBeInTheDocument();
});
