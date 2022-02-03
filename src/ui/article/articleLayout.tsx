import { Flex, Grid } from '@chakra-ui/react';
import { Article } from 'ui/article/component/article';
import { EmptyLayout } from 'ui/common/emptyLayout';
import { OGPDataType } from 'services/get-ogp';

export const ArticleLayout = ({ articles }: { articles: Array<OGPDataType> }): JSX.Element => {
  if (articles == null) {
    return <EmptyLayout />;
  }

  return (
    <Flex w="100%">
      <Grid mx="auto" templateColumns={['1fr', 'repeat(2, 1fr)']} gap={8}>
        {articles.map((article, idx: number) => (
          <Article key={idx} url={article.url} image={article.image.url} title={article.title} />
        ))}
      </Grid>
    </Flex>
  );
};
