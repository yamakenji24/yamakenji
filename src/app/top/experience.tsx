import type { ExperienceType } from 'services/get-experience-api';
import { Title } from 'ui/common/title';

export const Experience = ({ experiences }: { experiences: Array<ExperienceType> }) => {
  return (
    <div>
      <Title title="Experience" />
    </div>
  )
};
