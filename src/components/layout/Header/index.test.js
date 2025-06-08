import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './index';
import { ThemeContext } from '../../../App';

describe('Header', () => {
  test('renders navigation links', () => {
    render(
      <ThemeContext.Provider value={{ theme: 'light', toggleTheme: () => {} }}>
        <Header />
      </ThemeContext.Provider>
    );
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
});
