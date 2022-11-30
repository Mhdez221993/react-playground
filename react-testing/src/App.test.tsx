import { render, screen } from '@testing-library/react';

import App from './App';

test('get by text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Section 1/i);
  expect(linkElement).toBeInTheDocument();
});
