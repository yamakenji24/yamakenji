'use client';

import { useState, useMemo, useCallback } from 'react';
import type { PostItem } from 'builder/posts';
import type { SiteName } from './SiteTabs';
import { SiteTabs } from './SiteTabs';
import { Article } from './Article.client';
import { Pagination } from './Pagination';
import { css } from '../../../../styled-system/css';

const ITEMS_PER_PAGE = 9;

interface ArticleContainerProps {
  initialPosts: PostItem[];
}

export const ArticleContainer = ({ initialPosts }: ArticleContainerProps) => {
  const [siteName, setSiteName] = useState<SiteName>('All');
  const [currentPage, setCurrentPage] = useState(1);

  const handleChangeSiteName = useCallback((newSiteName: SiteName) => {
    setSiteName(newSiteName);
    setCurrentPage(1);
  }, []);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className={containerWrapper}>
      <SiteTabs handleChangeSiteName={handleChangeSiteName} />
      <Articles
        initialPosts={initialPosts}
        siteName={siteName}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

interface ArticlesProps {
  initialPosts: PostItem[];
  siteName: SiteName;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Articles = ({ initialPosts, siteName, currentPage, onPageChange }: ArticlesProps) => {
  const filteredPosts = useMemo(() => {
    if (siteName === 'All') return initialPosts;
    return initialPosts.filter((post) => post.siteName === siteName);
  }, [initialPosts, siteName]);

  const totalPages = useMemo(() => {
    return Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);
  }, [filteredPosts.length]);

  const currentPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredPosts.slice(startIndex, endIndex);
  }, [filteredPosts, currentPage]);

  if (filteredPosts.length === 0) {
    return (
      <div className={noArticlesWrapper}>
        <p className={noArticlesText}>No articles found for this site.</p>
      </div>
    );
  }

  return (
    <div className={articlesContainer}>
      <div className={articlesMeta}>
        <p className={articlesCount}>
          Showing {currentPosts.length} of {filteredPosts.length} articles
          {siteName !== 'All' && ` for ${siteName}`}
        </p>
      </div>

      <div className={articlesGrid}>
        {currentPosts.map((post, idx) => (
          <div
            key={`${post.link}-${currentPage}`}
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

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
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
    lg: 'repeat(3, 1fr)',
  },
  gap: { base: '24px', md: '32px' },
  alignItems: 'start',
});

const articleItemWrapper = css({
  animation: 'fadeInUp 0.8s ease-out both',
  opacity: 0,
  transform: 'translateY(40px)',
});

const noArticlesWrapper = css({
  textAlign: 'center',
  padding: { base: '60px 20px', md: '80px 40px' },
  color: 'gray.500',
});

const noArticlesText = css({
  fontSize: { base: '1.1rem', md: '1.2rem' },
  fontWeight: '500',
});

const articlesMeta = css({
  marginBottom: '24px',
  textAlign: 'center',
});

const articlesCount = css({
  fontSize: { base: '0.95rem', md: '1rem' },
  color: 'gray.600',
  fontWeight: '500',
});
