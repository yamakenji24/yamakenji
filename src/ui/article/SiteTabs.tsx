import { Button, Flex } from '@chakra-ui/react';

const SITENAME_LIST = ['All', 'Zenn', 'Qiita', 'Hatena Blog'];

interface Props {
  handleChangeSiteName: (newSiteName: string) => void;
}

export const SiteTabs = ({ handleChangeSiteName }: Props): JSX.Element => {
  return (
    <Flex ml={8} mb={8}>
      {SITENAME_LIST.map((siteName, idx) => (
        <SiteTab key={idx} siteName={siteName} handleChangeSiteName={handleChangeSiteName} />
      ))}
    </Flex>
  );
};

interface SiteTabProps {
  siteName: string;
  handleChangeSiteName: (newSiteName: string) => void;
}

const SiteTab = ({ siteName, handleChangeSiteName }: SiteTabProps) => {
  const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    handleChangeSiteName(siteName);
  };

  return (
    <Button variant="link" mx={[2, 4]} onClick={handleOnClick} >
      {siteName}
    </Button>
  );
};
