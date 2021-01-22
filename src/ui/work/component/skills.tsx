import { Chip } from '@material-ui/core';

interface Props {
  skills: Array<string>;
}

export const Skills = ({ skills }: Props) => {
  return (
    <div style={{ margin: '4px' }}>
      {skills.map((skill) => {
        return <Chip key={skill} size="small" label={skill} color="primary" variant="outlined" />;
      })}
    </div>
  );
};
