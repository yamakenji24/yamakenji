import { WorkType } from 'services/get-work-api';

export const dummyWorks: Array<WorkType> = Array(10)
  .fill(0)
  .map((_, idx) => ({
    id: idx.toString(),
    github: '',
    skills: [{
      fieldId: '',
      skill: '',
    }],
    image: {
      height: '200',
      type: 'type',
      url: '/not_found.png',
      width: '200',
    },
    title: 'dummy title',
    url: '/not_found.png',
    description: 'dummy description'
  }))