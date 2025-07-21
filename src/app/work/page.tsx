import { Title } from 'ui/common/title';
import { getWorks } from './_components/useWork';
import { Work } from './_components/Work';
import { css } from '../../../styled-system/css';

export default async function Page() {
  const works = getWorks();

  return (
    <div className={pageContainer}>
      <section className={heroSection}>
        <div className={heroContent}>
          <Title title="Works" />
        </div>
      </section>

      <section className={worksSection}>
        <div className={sectionContainer}>
          <div className={worksGrid}>
            {works.map((work, idx) => (
              <div
                key={idx}
                className={workItemWrapper}
                style={{ animationDelay: `${idx * 200}ms` }}
              >
                <Work {...work} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const pageContainer = css({
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
});

const heroSection = css({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  padding: { base: '60px 20px 80px', md: '80px 40px 100px' },
  position: 'relative',
  textAlign: 'center',
});

const heroContent = css({
  maxWidth: '800px',
  margin: '0 auto',
  animation: 'fadeIn 1s ease-out',
});

const worksSection = css({
  background: 'white',
  padding: { base: '60px 0', md: '80px 0' },
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

const sectionContainer = css({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: { base: '0 20px', md: '0 40px' },
});

const worksGrid = css({
  display: 'grid',
  gridTemplateColumns: {
    base: '1fr',
    md: 'repeat(2, 1fr)',
    lg: 'repeat(3, 1fr)',
  },
  gap: { base: '24px', md: '32px' },
  alignItems: 'start',
});

const workItemWrapper = css({
  animation: 'fadeInUp 0.8s ease-out both',
  opacity: 0,
  transform: 'translateY(40px)',
});
