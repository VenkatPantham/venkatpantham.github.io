import React from 'react';
import { render } from '@testing-library/react';
import SEOHelmet from './Helmet';

import { waitFor } from '@testing-library/react';

describe('SEOHelmet', () => {
  test('sets default title', async () => {
    render(<SEOHelmet />);
    await waitFor(() =>
      expect(document.title).toContain('Venkat Pantham')
    );
  });
});
