import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Title from '../ui/title';
import ArticleLayout from '../ui/article/articleLayout';

const Article = (): JSX.Element => {
  const classes = articleStyles();

  return (
    <div className={classes.main}>
      <Title title="Articles" />
      <ArticleLayout />
    </div>
  );
};

const articleStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      '& section': {
        padding: `${theme.spacing(7)}px 0`,
      },
    },
  }),
);

export default Article;
