import React from 'react';
import { render, screen } from '@testing-library/react';
import Price from './index';

test('renders full price', () => {
  const value = 299.95;
  render(<Price value={value} />);

  const renderedValue = screen.getByText(/R\$299.95/i);
  expect(renderedValue).toBeInTheDocument();
});

test('renders price without cents', () => {
  const value = 299.95;
  render(<Price value={value} isAbsolute />);

  const renderedValue = screen.getByText(/R\$299/i);
  expect(renderedValue).toBeInTheDocument();
});
