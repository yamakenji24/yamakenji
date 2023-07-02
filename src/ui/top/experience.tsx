import { Suspense } from 'react';
import { Title } from 'ui/common/title';
import { ExperienceType } from 'services/get-experience-api';
import { css } from '../../../styled-system/css';

export const Experience = ({ experiences }: { experiences: ExperienceType[] }): JSX.Element => {
  return (
    <div className={css({ padding: '0 24px' })}>
      <Title title="Experience" />
      <div className={wrapper}>
        <Suspense fallback={<div>loading...</div>}>
          <ExperienceList experiences={experiences} />
        </Suspense>
      </div>
    </div>
  );
};

const ExperienceList = ({ experiences }: { experiences: Array<ExperienceType> }) => {
  return (
    <>
      {experiences.map((exp) => (
        <div key={exp.id} className={listWrapper}>
          <p className={css({ pb: '8px' })}>{exp.during}</p>
          <p className={css({ fontWeight: 'bold', fontSize: '1.5rem', pb: '8px' })}>{exp.title}</p>
          <p
            className={css({
              bg: 'gray.100',
              borderRadius: '8px',
              p: '16px',
              boxShadow: '0 1px 4px 1px rgba(0, 0, 0, 0.1)',
            })}
          >
            {exp.body}
          </p>
        </div>
      ))}
    </>
  );
};

const wrapper = css({
  position: 'relative',
  py: '16px',
  pl: '32px',
  _after: {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '6px',
    height: '100%',
    width: '4px',
    background: '#eaeaea',
  },
});

const listWrapper = css({
  position: 'relative',
  pb: '32px',
  _after: {
    content: '""',
    position: 'absolute',
    top: 1,
    left: '-32px',
    height: '16px',
    width: '16px',
    background: 'blue.600',
    borderRadius: '50%',
    zIndex: 2,
  },
});
