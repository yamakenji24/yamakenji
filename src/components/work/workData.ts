import React, { ReactElement } from 'react';

interface WorkData {
  github: string;
  img: string;
  title: string;
  body: string;
  skills: Array<string>;
}

export const workData: Array<WorkData> = [
  {
    github: 'https://github.com/yamakenji24/SpotifyPlayer',
    img: '/works/spotify.jpg',
    title: 'Spotify APIを用いた音楽検索アプリ',
    skills: ['React', 'Redux', 'redux-saga', 'Hooks', 'TypeScript'],
    body:
      'Reactとspotify apiを用いた音楽検索アプリ。masterブランチでは、classコンポーネントとredux-sagaを利用して実装。hook-verブランチでは、hooksとtypescriptを利用。',
  },
  {
    github: 'https://github.com/yamakenji24/yamakenji',
    img: '/works/profile.jpg',
    title: 'yamakenji profile',
    skills: ['React', 'TypeScript', 'Next.js', 'Material-UI'],
    body:
      'このプロフィールサイトです。Next.jsを利用して、作成しています。製作物や記事など、随時更新していきます。',
  },
];
