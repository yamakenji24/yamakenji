import { SkillType } from 'services/get-skill-api';

export const dummySkills: Array<SkillType> = Array(10)
  .fill(0)
  .map((_, idx) => ({
    id: idx.toString(),
    name: 'dummy skill',
    img: '/not_found.png',
  }));
