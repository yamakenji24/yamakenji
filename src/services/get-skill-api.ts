import { client } from './client';

export interface SkillType {
  id: string;
  name: string;
  img: string;
}

export const getSkillAPI = (): Promise<Array<SkillType>> => {
  return client({
    method: 'GET',
    url: process.env.NEXT_PUBLIC_SKILL_URL,
  })
    .then(({ data }) => {
      const skills = data.contents.map((skill) => ({
        id: skill.id,
        name: skill.name,
        img: skill.img.url,
      }));

      return Promise.resolve(skills);
    })
    .catch(() => null);
};
