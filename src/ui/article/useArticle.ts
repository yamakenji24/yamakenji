import posts from '../../../.contents/posts.json';
import type { PostItem } from '../../builder/posts';

export const getSitedPosts = (siteName: string): PostItem[] => {
  if(siteName === 'All') return posts;
  return posts.filter((post) => post.siteName === siteName);
}