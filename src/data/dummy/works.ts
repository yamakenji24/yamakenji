import { WorkType } from 'services/get-work-api';

export const dummyWorks: Array<WorkType> = Array(10)
  .fill(0)
  .map((_, idx) => ({
    id: idx.toString(),
    github: '',
    link: '',
    img: '/not_found.png',
    title: 'dummy title',
    skills: [{
      fieldId: '',
      skill: '',
    }],
    body: 'dummy body',
  }))