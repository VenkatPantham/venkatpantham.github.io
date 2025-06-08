import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./components/sections/Skills', () => () => <div>Skills Section</div>);
jest.mock('./components/sections/Experience', () => () => <div>Experience Section</div>);
jest.mock('./components/sections/Projects', () => () => <div>Projects Section</div>);
jest.mock('./components/sections/Education', () => () => <div>Education Section</div>);
jest.mock('./components/sections/Contact', () => () => <div>Contact Section</div>);
jest.mock('./components/layout/Footer', () => () => <div>Footer Section</div>);

jest.mock('./components/SEO/Helmet', () => () => <title>Test Title</title>);

jest.mock('@emailjs/browser', () => ({ init: jest.fn(), send: jest.fn() }));

describe('App', () => {
  test('renders hero section', async () => {
    render(<App />);
    expect(screen.getByText("Hello, I'm")).toBeInTheDocument();
    await screen.findByText('Skills Section');
    expect(screen.getByText('Skills Section')).toBeInTheDocument();
    expect(screen.getByText('Experience Section')).toBeInTheDocument();
    expect(screen.getByText('Projects Section')).toBeInTheDocument();
    expect(screen.getByText('Education Section')).toBeInTheDocument();
    expect(screen.getByText('Contact Section')).toBeInTheDocument();
    expect(screen.getByText('Footer Section')).toBeInTheDocument();
  });
});
