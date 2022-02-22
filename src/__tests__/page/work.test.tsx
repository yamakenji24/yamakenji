import React from 'react';
import { render } from '../utils';

import WorkContainer from 'pages/work';

test('/works', () => {
  const { container } = render(<WorkContainer ogImageUrl={''} />);
  expect(container).toMatchSnapshot();
});
