import { client } from './client';

export interface ExperienceType {
  id: string;
  during: string;
  title: string;
  body: string;
}

export const getExperienceAPI = (): Promise<Array<ExperienceType>> => {
  return client({
    method: 'GET',
    url: process.env.NEXT_PUBLIC_EXPERIENCE_URL,
  })
    .then(({ data }) => {
      const experiences = data.contents.map((experience) => ({
        id: experience.id,
        title: experience.title,
        body: experience.body,
        during: experience.during,
      }));

      return Promise.resolve(experiences);
    })
    .catch(() => null);
};
