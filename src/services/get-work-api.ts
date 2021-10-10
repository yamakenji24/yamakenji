import { client } from './client';

export interface WorkType {
  id: string;
  github: string;
  link: string;
  img: string;
  title: string;
  skills: Array<{
    fieldId: string;
    skill: string;
  }>;
  body: string;
}

export const getWorkAPI = (): Promise<Array<WorkType>> => {
  return client({
    method: 'GET',
    url: process.env.NEXT_PUBLIC_WORK_URL,
  })
    .then(({ data }) => {
      const works = data.contents.map((value) => ({
        id: value.id,
        github: value.github,
        link: value.link,
        img: value.img.url,
        title: value.title,
        skills: value.skills,
        body: value.body,
      }));

      return Promise.resolve(works);
    })
    .catch(() => null);
};
