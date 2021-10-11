import { ExperienceType } from 'services/get-experience-api';

export const dummyExperiences: Array<ExperienceType> = Array(10)
  .fill(0)
  .map((_, idx) => ({
    id: idx.toString(),
    during: '',
    title: 'dummy experience',
    body: 'dummy body',
  }));
