import { css } from '../../../../styled-system/css';

interface Props {
  skills: string[];
}

export const Skills = ({ skills }: Props) => (
  <div className={skillsContainer}>
    {skills.map((skill, index) => (
      <span 
        key={skill} 
        className={skillTag}
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {skill}
      </span>
    ))}
  </div>
);

const skillsContainer = css({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
});

const skillTag = css({
  background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
  color: '#667eea',
  border: '1px solid rgba(102, 126, 234, 0.2)',
  borderRadius: '20px',
  padding: '6px 12px',
  fontSize: '0.8rem',
  fontWeight: '500',
  textTransform: 'capitalize',
  transition: 'all 0.3s ease',
  animation: 'fadeIn 0.6s ease-out',
  backdropFilter: 'blur(10px)',
  _hover: {
    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2))',
    borderColor: 'rgba(102, 126, 234, 0.4)',
    transform: 'translateY(-2px)',
    color: '#5a67d8',
  },
});
