import { getExperienceAPI } from 'services/get-experience-api';
import { getSkillAPI } from '../../services/get-skill-api';
import { Experience } from './experience';
import { Skills } from './skills';

export default async function Page() {
  const experiences = await getExperienceAPI();
  const skills = await getSkillAPI();

  return (
    <div>
      <Experience experiences={experiences} />
      <Skills skills={skills} />
    </div>
  );
}
