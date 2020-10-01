import * as React from 'react';

//後でいい感じに自動で更新できるようにする
interface ArticleData {
  url: string;
  title: string;
  img: string;
  date: string;
}
export const articleData: Array<ArticleData> = [
  {
    url: 'https://shell-mag.com/vol-68/',
    title: 'シェルスクリプトマガジン Vol.68',
    img: '/article/shellvol68.jpg',
    date: '2020/08',
  },
  {
    url: 'https://qiita.com/yamakenji/items/38fd1175bdd3338fb810',
    title: 'GraphQLについてまとめてみた',
    img: '/article/GraphQL.jpg',
    date: '2020/06/23',
  },
  {
    url: 'https://qiita.com/yamakenji/items/b94fa2ab104679b29b3a',
    title: 'React+Reduxで音楽検索アプリを作ってみた',
    img: '/article/spotify.jpg',
    date: '2019/12/14',
  },
  {
    url: 'https://shell-mag.com/vol-60/',
    title: 'シェルスクリプトマガジン Vol.60',
    img: '/article/shellvol60.jpg',
    date: '2019/06',
  },
];
