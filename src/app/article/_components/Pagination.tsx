'use client';

import { useMemo } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { css } from '../../../../styled-system/css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const generateCenterRange = (currentPage: number, totalPages: number, delta: number) => {
  const start = Math.max(2, currentPage - delta);
  const end = Math.min(totalPages - 1, currentPage + delta);
  const length = Math.max(0, end - start + 1);
  return Array.from({ length }, (_, i) => start + i);
};

const shouldShowStartEllipsis = (currentPage: number, delta: number) => currentPage - delta > 2;

const shouldShowEndEllipsis = (currentPage: number, totalPages: number, delta: number) =>
  currentPage + delta < totalPages - 1;

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const pageNumbers = useMemo(() => {
    if (totalPages === 1) return [1];

    const delta = 2;
    const centerRange = generateCenterRange(currentPage, totalPages, delta);
    const result: (number | string)[] = [];

    if (shouldShowStartEllipsis(currentPage, delta)) {
      result.push(1, '...');
    } else {
      result.push(1);
    }

    result.push(...centerRange);

    if (shouldShowEndEllipsis(currentPage, totalPages, delta)) {
      result.push('...', totalPages);
    } else if (totalPages > 1) {
      result.push(totalPages);
    }

    return [...new Set(result)];
  }, [currentPage, totalPages]);

  if (totalPages <= 1) return null;

  return (
    <div className={paginationContainer}>
      <div className={paginationWrapper}>
        <button
          className={navButton}
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous page"
        >
          <FiChevronLeft size={20} />
        </button>

        {/* Page  */}
        <div className={pageNumbersWrapper}>
          {pageNumbers.map((page, index) => {
            if (page === '...') {
              return (
                <span key={`dots-${index}`} className={dots}>
                  ...
                </span>
              );
            }

            const pageNum = page as number;
            return (
              <button
                key={pageNum}
                className={pageNumber}
                onClick={() => onPageChange(pageNum)}
                style={{
                  backgroundColor: currentPage === pageNum ? '#667eea' : 'transparent',
                  color: currentPage === pageNum ? 'white' : '#6B7280',
                  borderColor: currentPage === pageNum ? '#667eea' : '#E5E7EB',
                }}
                aria-label={`Go to page ${pageNum}`}
                aria-current={currentPage === pageNum ? 'page' : undefined}
              >
                {pageNum}
              </button>
            );
          })}
        </div>

        <button
          className={navButton}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next page"
        >
          <FiChevronRight size={20} />
        </button>
      </div>

      <div className={pageInfo}>
        Page {currentPage} of {totalPages}
      </div>
    </div>
  );
};

const paginationContainer = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
  marginTop: '48px',
  animation: 'fadeIn 0.5s ease-out',
});

const paginationWrapper = css({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  background: 'rgba(255, 255, 255, 0.8)',
  borderRadius: '20px',
  border: '1px solid rgba(102, 126, 234, 0.1)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  padding: '8px',
});

const navButton = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '44px',
  height: '44px',
  borderRadius: '12px',
  border: '2px solid #E5E7EB',
  background: 'white',
  color: '#6B7280',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  _hover: {
    borderColor: '#667eea',
    color: '#667eea',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(102, 126, 234, 0.2)',
  },
  _disabled: {
    opacity: 0.4,
    cursor: 'not-allowed',
    transform: 'none',
    _hover: {
      borderColor: '#E5E7EB',
      color: '#6B7280',
      transform: 'none',
      boxShadow: 'none',
    },
  },
  _active: {
    transform: 'translateY(0)',
  },
});

const pageNumbersWrapper = css({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  padding: '0 8px',
});

const pageNumber = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  borderRadius: '10px',
  border: '2px solid',
  background: 'white',
  fontWeight: '600',
  fontSize: '0.9rem',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  _hover: {
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(102, 126, 234, 0.2)',
  },
  _active: {
    transform: 'translateY(0)',
  },
});

const dots = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  color: '#6B7280',
  fontWeight: '600',
});

const pageInfo = css({
  fontSize: '0.9rem',
  color: '#6B7280',
  fontWeight: '500',
});
