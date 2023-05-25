import { render, screen } from '@testing-library/react';

import App from './App';

test('renders Free dictionary title', () => {
  // Arrange
  render(<App />)

  // Act
  const linkElement = screen.getByText(/free dictionary/i);

  // Assert
  expect(linkElement).toBeInTheDocument();
});

