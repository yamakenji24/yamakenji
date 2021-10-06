import { Container, Grid } from '@chakra-ui/react';
import { Article } from 'ui/article/component/article';
import { ArticleType } from 'utils/articleData';
import { EmptyLayout } from 'ui/emptyLayout';

interface Props {
  articles: Array<ArticleType>;
}

export const ArticleLayout = ({ articles }: Props): JSX.Element => {

  if (articles == null) {
    return <EmptyLayout />;
  }

  return (
    <Container maxW="5xl">
      <Grid templateColumns={['1fr', '1fr', 'repeat(2, 1fr)']} gap={16} textAlign="center">
        {articles.map((article: ArticleType) => (
          <Article
            key={article.id}
            url={article.url}
            img={article.img}
            title={article.title}
            date={article.date}
          />
        ))}
      </Grid>
    </Container>
  );
};