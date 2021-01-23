import { Chip } from '@material-ui/core';

interface Props {
  skills: Array<string>;
}

export const Skills = ({ skills }: Props): JSX.Element => {
  return (
    <div style={{ margin: '4px', textAlign: 'center' }}>
      {skills.map((skill) => {
        return <Chip key={skill} size="small" label={skill} color="primary" variant="outlined" />;
      })}
    </div>
  );
};
