import { Box } from '@chakra-ui/react';
import { Title } from 'ui/title';
import { ArticleLayout } from 'ui/article/articleLayout';
import { getArticleAPI } from 'services/get-article-api';
import { OGPDataType } from 'services/get-ogp';

interface Props {
  articles: Array<OGPDataType>;
}

const ArticleContainer = ({ articles }: Props): JSX.Element => {
  return (
    <Box>
      <Title title="Articles" fontSize="h4" />
      <ArticleLayout articles={articles} />
    </Box>
  );
};

export const getStaticProps = async (): Promise<{ props: Props }> => {
  const articles = await getArticleAPI();

  return {
    props: {
      articles,
    },
  };
};

export default ArticleContainer;
