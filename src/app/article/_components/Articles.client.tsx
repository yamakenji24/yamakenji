'use client';

import { useEffect, useState } from 'react';
import type { PostItem } from 'builder/posts';
import type { SiteName } from './SiteTabs';
import { SiteTabs } from './SiteTabs';
import { getSitedPosts } from './useArticle';
import { Article } from './Article.client';
import { css } from '../../../../styled-system/css';

export const ArticleContainer = () => {
  const [siteName, setSiteName] = useState<SiteName>('All');

  const handleChangeSiteName = (newSiteName: SiteName) => setSiteName(newSiteName);

  return (
    <div className={containerWrapper}>
      <SiteTabs handleChangeSiteName={handleChangeSiteName} />
      <Articles siteName={siteName} />
    </div>
  );
};

const Articles = ({ siteName }: { siteName: SiteName }) => {
  const [posts, setPosts] = useState<PostItem[]>([]);
  useEffect(() => {
    const newPosts = getSitedPosts(siteName);
    setPosts(newPosts);
  }, [siteName]);

  return (
    <div className={articlesContainer}>
      <div className={articlesGrid}>
        {posts.map((post, idx) => (
          <div 
            key={`${post.link}-${idx}`}
            className={articleItemWrapper}
            style={{ animationDelay: `${idx * 150}ms` }}
          >
            <Article
              url={post.link}
              image={post.ogImageURL}
              title={post.title}
              siteName={post.siteName}
              isoDate={post.isoDate}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const containerWrapper = css({
  width: '100%',
});

const articlesContainer = css({
  marginTop: '32px',
});

const articlesGrid = css({
  display: 'grid',
  gridTemplateColumns: { 
    base: '1fr', 
    md: 'repeat(2, 1fr)', 
    lg: 'repeat(3, 1fr)' 
  },
  gap: { base: '24px', md: '32px' },
  alignItems: 'start',
});

const articleItemWrapper = css({
  animation: 'fadeInUp 0.8s ease-out both',
  opacity: 0,
  transform: 'translateY(40px)',
});
