'use client';

import { useState, useMemo, useCallback } from 'react';
import type { SpeakingItem } from '../../../../data/speakingData';
import type { CategoryName } from './SpeakingTabs';
import { SpeakingTabs } from './SpeakingTabs';
import { SpeakingCard } from './SpeakingCard';
import { Pagination } from '../../article/_components/Pagination';
import { css } from '../../../../styled-system/css';

const ITEMS_PER_PAGE = 9;

interface SpeakingContainerProps {
  initialSpeaking: SpeakingItem[];
}

export const SpeakingContainer = ({ initialSpeaking }: SpeakingContainerProps) => {
  const [categoryName, setCategoryName] = useState<CategoryName>('All');
  const [currentPage, setCurrentPage] = useState(1);

  const handleChangeCategoryName = useCallback((newCategoryName: CategoryName) => {
    setCategoryName(newCategoryName);
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
      <SpeakingTabs handleChangeCategoryName={handleChangeCategoryName} />
      <SpeakingList
        initialSpeaking={initialSpeaking}
        categoryName={categoryName}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

interface SpeakingListProps {
  initialSpeaking: SpeakingItem[];
  categoryName: CategoryName;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const SpeakingList = ({ initialSpeaking, categoryName, currentPage, onPageChange }: SpeakingListProps) => {
  const filteredSpeaking = useMemo(() => {
    if (categoryName === 'All') return initialSpeaking;
    return initialSpeaking.filter((speaking) => speaking.category === categoryName);
  }, [initialSpeaking, categoryName]);

  const totalPages = useMemo(() => {
    return Math.ceil(filteredSpeaking.length / ITEMS_PER_PAGE);
  }, [filteredSpeaking.length]);

  const currentSpeaking = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredSpeaking.slice(startIndex, endIndex);
  }, [filteredSpeaking, currentPage]);

  if (filteredSpeaking.length === 0) {
    return (
      <div className={noSpeakingWrapper}>
        <p className={noSpeakingText}>No speaking events found for this category.</p>
      </div>
    );
  }

  return (
    <div className={speakingContainer}>
      <div className={speakingMeta}>
        <p className={speakingCount}>
          Showing {currentSpeaking.length} of {filteredSpeaking.length} speaking events
          {categoryName !== 'All' && ` in ${categoryName}`}
        </p>
      </div>

      <div className={speakingGrid}>
        {currentSpeaking.map((speaking, idx) => (
          <div
            key={`${speaking.id}-${currentPage}`}
            className={speakingItemWrapper}
            style={{ animationDelay: `${idx * 150}ms` }}
          >
            <SpeakingCard speaking={speaking} />
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

const speakingContainer = css({
  marginTop: '32px',
});

const speakingGrid = css({
  display: 'grid',
  gridTemplateColumns: {
    base: '1fr',
    md: 'repeat(2, 1fr)',
    lg: 'repeat(3, 1fr)',
  },
  gap: { base: '24px', md: '32px' },
  alignItems: 'start',
});

const speakingItemWrapper = css({
  animation: 'fadeInUp 0.8s ease-out both',
  opacity: 0,
  transform: 'translateY(40px)',
});

const noSpeakingWrapper = css({
  textAlign: 'center',
  padding: { base: '60px 20px', md: '80px 40px' },
  color: 'gray.500',
});

const noSpeakingText = css({
  fontSize: { base: '1.1rem', md: '1.2rem' },
  fontWeight: '500',
});

const speakingMeta = css({
  marginBottom: '24px',
  textAlign: 'center',
});

const speakingCount = css({
  fontSize: { base: '0.95rem', md: '1rem' },
  color: 'gray.600',
  fontWeight: '500',
});