import openGraphScraper from 'open-graph-scraper';

interface OpenGraphImage {
  height: string;
  type: string;
  url: string;
  width: string;
}

export interface OGPDataType {
  url: string;
  title: string;
  image: OpenGraphImage;
  description?: string;
}

const DEFAULT_IMAGE: OpenGraphImage = {
  height: '',
  type: 'type',
  url: '/not_found.png',
  width: '',
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getOGPData = async (content: any) => {
  const data = await openGraphScraper({
    url: content.url,
    timeout: 10000,
    onlyGetOpenGraphInfo: true,
  });

  if (!data.result.success || data.error) {
    return Promise.resolve({
      url: content.url,
      title: '検索中',
      image: DEFAULT_IMAGE,
    });
  }

  const title = data.result.ogTitle ? data.result.ogTitle : content.title;
  const image = data.result.ogImage ? data.result.ogImage : DEFAULT_IMAGE;
  const description = data.result.ogDescription ? data.result.ogDescription : title;

  return Promise.resolve({
    url: content.url,
    title: title,
    image: image,
    description: description,
  });
};
