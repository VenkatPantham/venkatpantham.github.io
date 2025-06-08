import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from './index';

jest.mock('@emailjs/browser', () => ({ init: jest.fn(), send: jest.fn() }));

describe('Contact', () => {
  test('renders contact form title', () => {
    render(<Contact />);
    expect(screen.getByText('Get In Touch')).toBeInTheDocument();
  });
});
