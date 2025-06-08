import React from 'react';
import { render, screen } from '@testing-library/react';
import Education from './index';

describe('Education', () => {
  test('renders education title', () => {
    render(<Education />);
    expect(screen.getByText('Education')).toBeInTheDocument();
  });
});
