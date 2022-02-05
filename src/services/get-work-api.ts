import { client } from './client';
import { getOGPData, OGPDataType } from './get-ogp';

export interface WorkType extends OGPDataType {
  id: string;
  github: string;
  skills: Array<{
    fieldId: string;
    skill: string;
  }>;
}

export const getWorkAPI = async (): Promise<Array<WorkType>> => {
  return client({
    method: 'GET',
    url: process.env.NEXT_PUBLIC_WORK_URL ?? '',
  })
    .then(({ data }) => {
      return Promise.all(data.contents.map(async (content: any) => {
        const ogpData = await getOGPData(content);
        return {
          ...ogpData,
          id: content.id,
          github: content.github,
          skills: content.skills,
        };
      }));
    })
    .catch(()=> Promise.reject(new Error('Failed to get work')));
};