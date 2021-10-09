import { Container, Grid } from '@chakra-ui/react';
import { Article } from 'ui/article/component/article';
import { EmptyLayout } from 'ui/emptyLayout';
import { OGPDataType } from 'utils/types';

export const ArticleLayout = ({ articles }: { articles: Array<OGPDataType> }): JSX.Element => {
  if (articles == null) {
    return <EmptyLayout />;
  }

  return (
    <Container maxW="5xl">
      <Grid templateColumns={['1fr', '1fr', 'repeat(2, 1fr)']} gap={16}>
        {articles.map((article, idx: number) => (
          <Article key={idx} url={article.url} image={article.image.url} title={article.title} />
        ))}
      </Grid>
    </Container>
  );
};
