import React from 'react'
import { render } from '@testing-library/react';
import App from '../App';

test('renders a hello message', () => {
  const { container } = render(<App />);
  expect(container.textContent).toContain('Hello');
});
