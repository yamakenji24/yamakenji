import { css } from '../../../../styled-system/css';

const SITENAME_LIST = ['All', 'Zenn', 'Qiita', 'Hatena Blog', 'My Blog'] as const;
export type SiteName = (typeof SITENAME_LIST)[number];

interface Props {
  handleChangeSiteName: (newSiteName: SiteName) => void;
}

export const SiteTabs = ({ handleChangeSiteName }: Props) => {
  return (
    <div className={css({ pb: '24px', textAlign: 'center' })}>
      {SITENAME_LIST.map((siteName, idx) => (
        <SiteTab key={idx} siteName={siteName} handleChangeSiteName={handleChangeSiteName} />
      ))}
    </div>
  );
};

interface SiteTabProps {
  siteName: SiteName;
  handleChangeSiteName: (newSiteName: SiteName) => void;
}

const SiteTab = ({ siteName, handleChangeSiteName }: SiteTabProps) => {
  const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    handleChangeSiteName(siteName);
  };

  return (
    <button
      className={css({
        px: { base: '8px', md: '16px' },
        cursor: 'pointer',
        _hover: {bg: 'gray.200'}
      })}
      onClick={handleOnClick}
    >
      {siteName}
    </button>
  );
};
