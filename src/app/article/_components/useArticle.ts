import posts from '../../../../.contents/posts.json';
import type { PostItem } from '../../../builder/posts';
import type { SiteName } from './SiteTabs';

export const getSitedPosts = (siteName: SiteName): PostItem[] => {
  if (siteName === 'All') return posts;
  return posts.filter((post) => post.siteName === siteName);
};
