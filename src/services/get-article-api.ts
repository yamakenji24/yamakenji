import { client } from './client';
import { getOGPData, OGPDataType } from './get-ogp';

export const getArticleAPI = (): Promise<Array<OGPDataType>> => {
  return client({
    method: 'GET',
    url: process.env.NEXT_PUBLIC_ARTICLE_URL ?? '',
  }).then(({ data }) => {
    return Promise.all(data.contents.map((content: any) => getOGPData(content)));
  })
  .catch(() => Promise.reject(new Error('Failed to get article')));
}
