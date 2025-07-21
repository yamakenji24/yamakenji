import { getExperienceAPI } from 'services/get-experience-api';
import { Profile } from './_components/profile';
import { GitHubActivity } from './_components/GitHubActivity.client';
import { Experience } from './_components/experience';
import { PageWrapper } from './_components/PageWrapper.client';
import { UnifiedBackground } from './_components/UnifiedEffects';
import { css } from '../../styled-system/css';

export default async function Page() {
  const experiences = await getExperienceAPI();

  return (
    <PageWrapper>
      <div className={pageContainer}>
        <section className={heroSection}>
          <div style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.6 }}>
            <UnifiedBackground type="profile" colorScheme="blue" />
          </div>
          <div className={heroContent}>
            <Profile />
          </div>
        </section>

        <section className={section}>
          <Experience experiences={experiences} />
        </section>

        <section className={section}>
          <GitHubActivity />
        </section>
      </div>
    </PageWrapper>
  );
}

const pageContainer = css({
  minHeight: '100vh',
});

const heroSection = css({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  padding: { base: '40px 20px 80px', md: '60px 40px 100px' },
  minHeight: '80vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
});

const heroContent = css({
  position: 'relative',
  zIndex: 1,
});

const section = css({
  padding: { base: '40px 20px', md: '80px 40px' },
  margin: '0',
  position: 'relative',
  _before: {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
  },
});
