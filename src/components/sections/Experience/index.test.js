import React from 'react';
import { render, screen } from '@testing-library/react';
import Experience from './index';

describe('Experience', () => {
  test('renders work experience title', () => {
    render(<Experience />);
    expect(screen.getByText('Work Experience')).toBeInTheDocument();
  });
});
