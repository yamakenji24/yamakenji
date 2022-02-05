import React from 'react';
import { render } from '../utils';

import Contact from 'pages/contact';

test('/contact', () => {
  const { container } = render(<Contact />);
  expect(container).toMatchSnapshot();
});
