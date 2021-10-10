import { client } from './client';
import { getOGPData } from './get-ogp';

export const getArticleAPI = () => {
  return client({
    method: 'GET',
    url: process.env.NEXT_PUBLIC_ARTICLE_URL,
  }).then(({ data }) => {
    return Promise.all(data.contents.map((content) => getOGPData(content)));
  })
  .catch(() => null);
}