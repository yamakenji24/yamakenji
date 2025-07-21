import { Title } from 'ui/common/title';
import { SectionHeader } from '../_components/SectionHeader';
import { SpeakingContainer } from './_components/Speaking.client';
import { css } from '../../../styled-system/css';
import { getSpeakingItems } from '../../../data/speakingData';

export default async function Page() {
  const allSpeaking = getSpeakingItems();

  return (
    <div className={pageContainer}>
      <SectionHeader variant="normal" colorScheme="orange" height="medium">
        <Title title="Speaking" />
        <p className={subtitleStyle}>Conference talks and presentations</p>
      </SectionHeader>

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
});

const subtitleStyle = css({
  fontSize: { base: '1rem', md: '1.2rem' },
  color: 'rgba(255, 255, 255, 0.8)',
  marginTop: '16px',
  fontWeight: '300',
});

const speakingSection = css({
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