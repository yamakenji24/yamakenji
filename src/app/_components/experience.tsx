import { Suspense } from 'react';
import { Title } from 'ui/common/title';
import { ExperienceType } from 'services/get-experience-api';
import { css } from '../../../styled-system/css';

export const Experience = ({ experiences }: { experiences: ExperienceType[] }): JSX.Element => {
  return (
    <div className={sectionContainer}>
      <div className={contentWrapper}>
        <Title title="Experience" />
        <div className={wrapper}>
          <Suspense fallback={<div className={loadingState}>Loading experiences...</div>}>
            <ExperienceList experiences={experiences} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

const ExperienceList = ({ experiences }: { experiences: Array<ExperienceType> }) => {
  return (
    <>
      {experiences.map((exp) => (
        <div key={exp.id} className={listWrapper}>
          <div className={timelineNode}>
            <div className={timelineDot} />
          </div>
          <div className={experienceCard}>
            <div className={experienceHeader}>
              <p className={duration}>{exp.during}</p>
              <h3 className={experienceTitle}>{exp.title}</h3>
            </div>
            <div className={experienceDescription}>
              {exp.body}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

const sectionContainer = css({
  maxWidth: '1200px',
  margin: '0 auto',
});

const contentWrapper = css({
  padding: { base: '0 20px', md: '0 40px' },
});

const loadingState = css({
  textAlign: 'center',
  color: 'gray.500',
  fontSize: '1.1rem',
  padding: '40px',
});

const wrapper = css({
  position: 'relative',
  marginTop: '48px',
  paddingLeft: { base: '24px', md: '48px' },
  _before: {
    content: '""',
    position: 'absolute',
    top: 0,
    left: { base: '12px', md: '24px' },
    height: '100%',
    width: '3px',
    background: 'linear-gradient(180deg, #667eea, #764ba2)',
    borderRadius: '2px',
  },
});

const listWrapper = css({
  position: 'relative',
  marginBottom: { base: '32px', md: '48px' },
  display: 'flex',
  alignItems: 'flex-start',
  gap: { base: '16px', md: '24px' },
});

const timelineNode = css({
  position: 'absolute',
  left: { base: '-36px', md: '-60px' },
  top: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const timelineDot = css({
  width: { base: '16px', md: '20px' },
  height: { base: '16px', md: '20px' },
  borderRadius: 'full',
  background: 'linear-gradient(135deg, #667eea, #764ba2)',
  border: '3px solid white',
  boxShadow: '0 2px 8px rgba(102, 126, 234, 0.3)',
  position: 'relative',
  _before: {
    content: '""',
    position: 'absolute',
    inset: '-8px',
    borderRadius: 'full',
    background: 'rgba(102, 126, 234, 0.1)',
    animation: 'pulse 2s infinite',
  },
});

const experienceCard = css({
  background: 'white',
  borderRadius: '16px',
  padding: { base: '20px', md: '28px' },
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  border: '1px solid rgba(102, 126, 234, 0.1)',
  transition: 'all 0.3s ease',
  flex: 1,
  animation: 'fadeInUp 0.6s ease-out',
  _hover: {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
    borderColor: 'rgba(102, 126, 234, 0.2)',
  },
});

const experienceHeader = css({
  marginBottom: '16px',
});

const duration = css({
  fontSize: { base: '0.9rem', md: '1rem' },
  color: '#667eea',
  fontWeight: '600',
  marginBottom: '8px',
  textTransform: 'uppercase',
  letterSpacing: 'wider',
});

const experienceTitle = css({
  fontSize: { base: '1.3rem', md: '1.5rem' },
  fontWeight: 'bold',
  color: 'gray.800',
  lineHeight: '1.4',
  marginBottom: '0',
});

const experienceDescription = css({
  fontSize: { base: '1rem', md: '1.1rem' },
  color: 'gray.600',
  lineHeight: '1.6',
  letterSpacing: '0.01em',
});
