import { useState } from 'react';
import { css } from '../../../../styled-system/css';

const SITENAME_LIST = ['All', 'Zenn', 'Qiita', 'Hatena Blog', 'My Blog'] as const;
export type SiteName = (typeof SITENAME_LIST)[number];

interface Props {
  handleChangeSiteName: (newSiteName: SiteName) => void;
}

const getSiteColor = (siteName: SiteName) => {
  switch (siteName) {
    case 'Zenn':
      return '#3EA8FF';
    case 'Qiita':
      return '#55C500';
    case 'Hatena Blog':
      return '#00A4DE';
    case 'My Blog':
      return '#667eea';
    default:
      return '#667eea';
  }
};

export const SiteTabs = ({ handleChangeSiteName }: Props) => {
  const [activeSite, setActiveSite] = useState<SiteName>('All');

  const handleTabChange = (siteName: SiteName) => {
    setActiveSite(siteName);
    handleChangeSiteName(siteName);
  };

  return (
    <div className={tabsContainer}>
      <div className={tabsWrapper}>
        {SITENAME_LIST.map((siteName) => (
          <SiteTab
            key={siteName}
            siteName={siteName}
            isActive={activeSite === siteName}
            onTabChange={handleTabChange}
          />
        ))}
      </div>
    </div>
  );
};

interface SiteTabProps {
  siteName: SiteName;
  isActive: boolean;
  onTabChange: (siteName: SiteName) => void;
}

const SiteTab = ({ siteName, isActive, onTabChange }: SiteTabProps) => {
  const siteColor = getSiteColor(siteName);

  const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    onTabChange(siteName);
  };

  return (
    <button
      className={siteTabButton}
      onClick={handleOnClick}
      style={{
        backgroundColor: isActive ? siteColor : 'transparent',
        color: isActive ? 'white' : '#6B7280',
        borderColor: isActive ? siteColor : '#E5E7EB',
      }}
    >
      {siteName}
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

const siteTabButton = css({
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
