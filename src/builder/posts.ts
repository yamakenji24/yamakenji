import fs from 'fs-extra';
import Parser from 'rss-parser';
import { getOGPImage } from './ogpImage';
import { feeds, Feeds, FeedSource } from '../../rss-feed';
export default {};

type FeedItem = {
  title: string;
  link: string;
  ogImageURL: string;
  isoDate: string;
  siteName: string;
  dateMiliSec: number;
};

export type PostItem = FeedItem & {
  author: string;
  authorID: string;
};

const parser = new Parser();

async function fetchFeedItems(feedsource: FeedSource) {
  const feed = await parser.parseURL(feedsource.url);
  if (!feed?.items?.length) return [];

  const feedItems = await Promise.all(
    feed.items.map(async ({ title, link, isoDate }) => {
      const ogImageURL = link ? await getOGPImage(link) : '';

      return {
        title,
        link,
        ogImageURL,
        isoDate,
        siteName: feedsource.siteName,
        dateMiliSec: isoDate ? new Date(isoDate).getTime() : 0,
      };
    }),
  );
  return feedItems.filter(({ title, link }) => title && link) as FeedItem[];
}

async function getFeedItemsFromSources(sources: undefined | FeedSource[]) {
  if (!sources?.length) return [];
  let feedItems: FeedItem[] = [];
  for (const feedsource of sources) {
    const items = await fetchFeedItems(feedsource);
    if (items) feedItems = [...feedItems, ...items];
  }
  return feedItems;
}

async function getMyFeedItems(feeds: Feeds): Promise<PostItem[]> {
  const { id, sources, name } = feeds;
  const feedItems = await getFeedItemsFromSources(sources);
  if (!feedItems) return [];

  const postItems = feedItems.map((item) => {
    return {
      ...item,
      author: name,
      authorID: id,
    };
  });

  return postItems;
}

(async function () {
  const items = await getMyFeedItems(feeds);
  items.sort((a, b) => b.dateMiliSec - a.dateMiliSec);
  fs.ensureDirSync('.contents');
  fs.writeJsonSync('.contents/posts.json', items);
})();
