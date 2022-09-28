import openGraphScraper from 'open-graph-scraper';

export const getOGPImage = async (url: string): Promise<string> => {
  const ogpData = await openGraphScraper({
    url,
    timeout: 10000,
    onlyGetOpenGraphInfo: true,
  });

  if (!ogpData.result.success || ogpData.error) {
    return Promise.reject('/not_found.png');
  }
  const ogImage = ogpData.result.ogImage;

  if (!ogImage) {
    return Promise.resolve('/not_found.png');
  }

  if ('url' in ogImage) {
    return Promise.resolve(ogImage?.url);
  }

  return Promise.resolve(ogImage[0]?.url);
};
