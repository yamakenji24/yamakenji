import { Title } from 'ui/common/title';
import { SectionHeader } from '../_components/SectionHeader';
import { ArticleContainer } from './_components/Articles.client';
import { css } from '../../../styled-system/css';
import posts from '../../../.contents/posts.json';
import type { PostItem } from '../../builder/posts';

export default async function Page() {
  const allPosts: PostItem[] = posts;

  return (
    <div className={pageContainer}>
      <SectionHeader variant="normal" colorScheme="cyan" height="medium">
        <Title title="Articles" />
        <p className={subtitleStyle}>Technical writings and insights</p>
      </SectionHeader>

      <section className={articlesSection}>
        <div className={sectionContainer}>
          <ArticleContainer initialPosts={allPosts} />
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

const articlesSection = css({
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
