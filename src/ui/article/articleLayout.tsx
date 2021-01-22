import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { articleData, ArticleData } from '../../utils/articleData';
import { Article } from './component/article';

export const ArticleLayout = (): JSX.Element => {
  const classes = articlelayoutStyles();

  return (
    <section className={classes.article}>
      <Container maxWidth="md" className="container">
        {articleData.map((article: ArticleData) => (
          <Article
            key={article.title}
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
        [theme.breakpoints.down('xs')]: {
          gridTemplateColumns: '1fr',
        },
      },
      '& article': {
        position: 'relative',
      },
    },
  }),
);
