export type Feeds = {
  id: string;
  name: string;
  bio: string;
  sources: FeedSource[];
  githubUserName: string;
  websiteUrl: string;
};

export type FeedSource = {
  siteName: string;
  url: string;
}

export const feeds: Feeds = {
  id: 'yamakenji24',
  name: 'yamakenji24',
  bio: 'Software Engineer',
  sources: [
    {
      siteName: 'Zenn',
      url: 'https://zenn.dev/yamakenji24/feed?all=1',
    },
    {
      siteName: 'Qiita',
      url: 'https://qiita.com/yamakenji24/feed.atom',
    },
    {
      siteName: 'Hatena Blog',
      url: 'https://yamakenji24.hatenablog.com/feed',
    },
  ],
  githubUserName: 'yamakenji24',
  websiteUrl: 'https://yamakenji.com',
};
