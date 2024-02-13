import { css } from '../../../../styled-system/css';

interface Props {
  skills: string[];
}

export const Skills = ({ skills }: Props) => (
  <div className={css({ pt: '16px', marginTop: 'auto' })}>
    {skills.map((skill) => (
      <span key={skill} className={skillSpan}>
        {skill}
      </span>
    ))}
  </div>
);

const skillSpan = css({
  mx: '4px',
  px: '4px',
  color: 'blue.600',
  border: '1px solid',
  borderRadius: 'full',
  fontSize: 'sm',
});
