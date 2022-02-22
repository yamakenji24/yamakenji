import React from 'react';
import { render } from '../utils';
import ArticleContainer from 'pages/article';

test('/article', () => {
  const { container } = render(<ArticleContainer ogImageUrl={''} />);
  expect(container).toMatchSnapshot();
});
