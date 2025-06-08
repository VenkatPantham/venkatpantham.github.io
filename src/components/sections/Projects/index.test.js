import React from 'react';
import { render, screen } from '@testing-library/react';
import Projects from './index';

describe('Projects', () => {
  test('renders projects title', () => {
    render(<Projects />);
    expect(screen.getByText('Projects')).toBeInTheDocument();
  });
});
