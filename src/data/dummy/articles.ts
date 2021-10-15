import { OGPDataType } from '../../services/get-ogp';

export const dummyArticles: Array<OGPDataType> = Array(10)
  .fill(0)
  .map((_, idx) => ({
    url: '/not_found.png',
    title: 'dummy title',
    image: {
      height: '200',
      type: 'type',
      url: '/not_found.png',
      width: '200',
    }
  }))