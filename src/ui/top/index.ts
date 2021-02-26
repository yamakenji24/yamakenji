export { TopImage } from './topImage';
export { Profile } from './profile';
export { Experience } from './experience';
export { Skills } from './skill'; 

export interface Services {
  service: string;
  url: string;
}

export const services: Array<Services> = [
  {
    service: '/github.svg',
    url: 'https://github.com/yamakenji24',
  },
  {
    service: '/hatenablog.svg',
    url: 'https://yamakenji24.hatenablog.com/',
  },
  {
    service: '/qiita.png',
    url: 'https://qiita.com/yamakenji',
  },
  {
    service: '/zenn.svg',
    url: 'https://zenn.dev/yamakenji24',
  },
]
