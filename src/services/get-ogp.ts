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
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getOGPData = async (article) => {
  const data = await openGraphScraper({
    url: article.url,
    timeout: 10000,
    onlyGetOpenGraphInfo: true,
  });

  if (!data.result.success || data.error ) {
    return Promise.resolve({ 
      url: article.url,
      title: "検索中",
      image: "/not_found.png",
    });
  }


  return Promise.resolve({
    url: article.url,
    title: data.result.ogTitle,
    image: data.result.ogImage,
  });
};