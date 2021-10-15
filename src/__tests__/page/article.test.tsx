import React from 'react';
import { render } from '../utils';

import ArticleContainer from 'pages/article';
import { dummyArticles } from 'data/dummy/articles'

test('/article', () => {
  const { container } = render(
    <ArticleContainer 
      articles={dummyArticles}
      ogImageUrl={null}
    />
  )
  expect(container).toMatchSnapshot()
})