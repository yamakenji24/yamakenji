import { Chip } from '@material-ui/core';

interface Props {
  skills: Array<{
    fieldId: string;
    skill: string;
  }>;
}

export const Skills = ({ skills }: Props) => {
  return (
    <div style={{ margin: '4px' }}>
      {skills.map(({fieldId, skill}) => {
        return <Chip key={skill} size="small" label={skill} color="primary" variant="outlined" />;
      })}
    </div>
  );
};
