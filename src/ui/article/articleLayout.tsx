import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Article } from 'ui/article/component/article';
import { ArticleType } from 'utils/articleData';
import { EmptyLayout } from 'ui/emptyLayout';

interface Props {
  articles: Array<ArticleType>;
}

export const ArticleLayout = ({ articles }: Props): JSX.Element => {
  const classes = articlelayoutStyles();

  if (articles == null) {
    return <EmptyLayout />
  }

  return (
    <section className={classes.article}>
      <Container maxWidth="md" className="container">
        {articles.map((article: ArticleType) => (
          <Article
            key={article.id}
            url={article.url}
            img={article.img}
            title={article.title}
            date={article.date}
          />
        ))}
      </Container>
    </section>
  );
};

const articlelayoutStyles = makeStyles((theme: Theme) =>
  createStyles({
    article: {
      '& > .container': {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridGap: theme.spacing(4),
        [theme.breakpoints.down('sm')]: {
          gridTemplateColumns: '1fr',
        },
      },
      '& article': {
        position: 'relative',
      },
    },
  }),
);
