import { render, screen } from '@testing-library/react';
import App from './App';

test('renders university title', () => {
  render(<App />);
  const textElement = screen.getByText(/University of Engineering and Technology Peshawar/i);
  expect(textElement).toBeInTheDocument();
});
