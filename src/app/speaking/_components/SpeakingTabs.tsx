import { useState } from 'react';
import { css } from '../../../../styled-system/css';

const CATEGORY_LIST = ['All', 'Tech', 'LT', 'Workshop', 'Keynote', 'Panel'] as const;
export type CategoryName = (typeof CATEGORY_LIST)[number];

interface Props {
  handleChangeCategoryName: (newCategoryName: CategoryName) => void;
}

const getCategoryColor = (categoryName: CategoryName) => {
  switch (categoryName) {
    case 'Tech':
      return '#667eea';
    case 'LT':
      return '#55C500';
    case 'Workshop':
      return '#FF6B6B';
    case 'Keynote':
      return '#4ECDC4';
    case 'Panel':
      return '#FFE66D';
    default:
      return '#667eea';
  }
};

export const SpeakingTabs = ({ handleChangeCategoryName }: Props) => {
  const [activeCategory, setActiveCategory] = useState<CategoryName>('All');

  const handleTabChange = (categoryName: CategoryName) => {
    setActiveCategory(categoryName);
    handleChangeCategoryName(categoryName);
  };

  return (
    <div className={tabsContainer}>
      <div className={tabsWrapper}>
        {CATEGORY_LIST.map((categoryName) => (
          <CategoryTab
            key={categoryName}
            categoryName={categoryName}
            isActive={activeCategory === categoryName}
            onTabChange={handleTabChange}
          />
        ))}
      </div>
    </div>
  );
};

interface CategoryTabProps {
  categoryName: CategoryName;
  isActive: boolean;
  onTabChange: (categoryName: CategoryName) => void;
}

const CategoryTab = ({ categoryName, isActive, onTabChange }: CategoryTabProps) => {
  const categoryColor = getCategoryColor(categoryName);

  const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    onTabChange(categoryName);
  };

  return (
    <button
      className={categoryTabButton}
      onClick={handleOnClick}
      style={{
        backgroundColor: isActive ? categoryColor : 'transparent',
        color: isActive ? 'white' : '#6B7280',
        borderColor: isActive ? categoryColor : '#E5E7EB',
      }}
    >
      {categoryName}
    </button>
  );
};

const tabsContainer = css({
  position: 'sticky',
  top: '0',
  zIndex: 100,
  padding: '16px 0 8px 0',
  display: 'flex',
  justifyContent: 'center',
  animation: 'fadeIn 1.4s ease-out',
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(20px)',
  borderBottom: '1px solid rgba(102, 126, 234, 0.1)',
  transition: 'all 0.3s ease',
  _after: {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80%',
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.2), transparent)',
  },
});

const tabsWrapper = css({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '16px',
  padding: '8px',
  background: 'rgba(255, 255, 255, 0.8)',
  borderRadius: '16px',
  border: '1px solid rgba(102, 126, 234, 0.1)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
});

const categoryTabButton = css({
  padding: '8px 24px',
  borderRadius: '16px',
  border: '2px solid',
  background: 'transparent',
  fontWeight: '600',
  fontSize: { base: '0.9rem', md: '1rem' },
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  textTransform: 'capitalize',
  position: 'relative',
  _hover: {
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  },
  _active: {
    transform: 'translateY(0)',
  },
});
