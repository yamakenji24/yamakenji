export type Works = {
  github: string;
  skills: string[];
  url: string;
  body: string;
  title: string;
};

export const works: Works[] = [
  {
    github: 'https://github.com/yamakenji24/blog.yamakenji',
    skills: ['Remix', 'React', 'Tailwind', 'TypeScript'],
    url: 'https://blog.yamakenji.com/',
    body: 'Remixを用いたブログを開設しました。技術的メモや参加報告、ブログ的な内容はここで紹介していきます。',
    title: 'yamakenji blog',
  },
  {
    github: 'https://github.com/yamakenji24/CardCreator',
    skills: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    url: 'https://card-creator-hp6vcyu1c.vercel.app/',
    body: 'Next.jsとTailwindを用いたエンジニア用名刺アプリ。Next.js conf2020のチケットを参考に作成',
    title: 'エンジニア名刺アプリ',
  },
  {
    github: 'https://github.com/yamakenji24/yamakenji',
    skills: ['Next.js', 'React', 'TypeScript', 'Chakra UI'],
    url: 'https://yamakenji.com/',
    body: 'このプロフィールサイトです。Next.jsを利用して、作成しています。製作物や記事など、随時更新していきます',
    title: 'yamakenji24 profile',
  },
  {
    github: 'https://github.com/yamakenji24/SpotifyPlayer',
    skills: ['React', 'Redux', 'TypeScript'],
    url: 'https://yamakenji24.github.io/SpotifyPlayer/',
    body: 'Reactとspotify apiを用いた音楽検索アプリ。masterブランチでは、classコンポーネントとredux-sagaを利用して実装。hook-verブランチでは、hooksとtypescriptを利用',
    title: 'Spotify APIを用いた音楽検索アプリ',
  },
];
