import React from 'react';
import { render } from '../utils';

import WorkPage from 'pages/work';
import { dummyWorks } from 'data/dummy/works';

test('/works', () => {
  const { container } = render(<WorkPage works={dummyWorks} ogImageUrl={''} />);
  expect(container).toMatchSnapshot();
});
