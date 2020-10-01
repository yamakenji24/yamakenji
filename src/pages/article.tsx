import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Title from '../components/article/title';
import ArticleLayout from '../components/article/articleLayout';

const Article = (): JSX.Element => {
  const classes = articleStyles();

  return (
    <div className={classes.main}>
      <Title />
      <ArticleLayout />
    </div>
  );
};

const articleStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      '& section': {
        padding: `${theme.spacing(10)}px 0`,
      },
    },
  }),
);

export default Article;
