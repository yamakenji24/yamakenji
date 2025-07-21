import { Title } from 'ui/common/title';
import { SpeakingContainer } from './_components/Speaking.client';
import { css } from '../../../styled-system/css';
import { getSpeakingItems } from '../../../data/speakingData';

export default async function Page() {
  const allSpeaking = getSpeakingItems();

  return (
    <div className={pageContainer}>
      <section className={heroSection}>
        <div className={heroContent}>
          <Title title="Speaking" />
        </div>
      </section>

      <section className={speakingSection}>
        <div className={sectionContainer}>
          <SpeakingContainer initialSpeaking={allSpeaking} />
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

const speakingSection = css({
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