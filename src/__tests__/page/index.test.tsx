import React from 'react';
import { render } from '../utils';

import Toppage from 'pages/index';
import { dummyExperiences, dummySkills } from 'data/dummy';

test('/', () => {
  const { container } = render(
    <Toppage experiences={dummyExperiences} skills={dummySkills} ogImageUrl={''} />,
  );
  expect(container).toMatchSnapshot();
});
