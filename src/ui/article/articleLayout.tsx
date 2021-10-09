import { Container, Grid } from '@chakra-ui/react';
import { Article } from 'ui/article/component/article';
import { EmptyLayout } from 'ui/emptyLayout';

export const ArticleLayout = ({ articles }): JSX.Element => {
  console.log("articles: ", articles)
  if (articles == null) {
    return <EmptyLayout />;
  }

  return (
    <Container maxW="5xl">
      <Grid templateColumns={['1fr', '1fr', 'repeat(2, 1fr)']} gap={16}>
        {articles.map((article, idx: number) => (
          <Article
            key={idx}
            url={article.url}
            image={article.image}
            title={article.title}
          />
        ))}
      </Grid>
    </Container>
  );
};