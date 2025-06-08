import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from './index';

describe('Hero', () => {
  test('renders hero greeting', () => {
    render(<Hero />);
    expect(screen.getByText("Hello, I'm")).toBeInTheDocument();
    expect(screen.getByText('Venkat Pantham')).toBeInTheDocument();
  });
});
