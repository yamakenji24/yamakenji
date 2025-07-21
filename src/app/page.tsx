import { getExperienceAPI } from 'services/get-experience-api';
import { Profile } from './_components/profile';
import { GitHubActivity } from './_components/GitHubActivity.client';
import { Experience } from './_components/experience';
import { css } from '../../styled-system/css';

export default async function Page() {
  const experiences = await getExperienceAPI();

  return (
    <div className={pageContainer}>
      <section className={heroSection}>
        <Profile />
      </section>
      
      <section className={section}>
        <Experience experiences={experiences} />
      </section>
      
      <section className={section}>
        <GitHubActivity />
      </section>
    </div>
  );
}

const pageContainer = css({
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
});

const heroSection = css({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  padding: { base: '40px 20px 80px', md: '60px 40px 100px' },
  minHeight: '80vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const section = css({
  background: 'white',
  padding: { base: '60px 20px', md: '80px 40px' },
  margin: '0',
  position: 'relative',
  _before: {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(90deg, #667eea, #764ba2)',
  },
});
