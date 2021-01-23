export interface WorkData {
  github: string;
  link: string;
  title: string;
  body: string;
  skills: Array<string>;
}

export const workData: Array<WorkData> = [
  {
    github: 'https://github.com/yamakenji24/CardCreator',
    link: 'https://card-creator-hp6vcyu1c.vercel.app/',
    title: 'エンジニア名刺アプリ',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
    body: 'Next.jsとTailwindを用いたエンジニア用名刺アプリ。Next.js conf2020のチケットを参考に作成',
  },
  {
    github: 'https://github.com/yamakenji24/SpotifyPlayer',
    link: 'https://yamakenji24.github.io/SpotifyPlayer/',
    title: 'Spotify APIを用いた音楽検索アプリ',
    skills: ['React', 'Redux', 'redux-saga', 'Hooks', 'TypeScript'],
    body:
      'Reactとspotify apiを用いた音楽検索アプリ。masterブランチでは、classコンポーネントとredux-sagaを利用して実装。hook-verブランチでは、hooksとtypescriptを利用。',
  },
  {
    github: 'https://github.com/yamakenji24/yamakenji',
    link: 'https://yamakenji.vercel.app/',
    title: 'yamakenji profile',
    skills: ['React', 'TypeScript', 'Next.js', 'Material-UI'],
    body:
      'このプロフィールサイトです。Next.jsを利用して、作成しています。製作物や記事など、随時更新していきます。',
  },
];
