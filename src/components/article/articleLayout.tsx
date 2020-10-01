import * as React from 'react';
import Link from 'next/link';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import { articleData } from './articleData';

const ArticleLayout = (): JSX.Element => {
  const classes = articlelayoutStyles();

  return (
    <section className={classes.article}>
      <Container maxWidth="md" className="container">
        {articleData.map((article) => (
          <article key={article.url}>
            <Link href={article.url} passHref>
              <MuiLink>
                <div className="wrapper">
                  <img src={article.img} className="arcImg" />
                  <Typography variant="h5" className="title">
                    {article.title}
                  </Typography>
                  <div className="date">{article.date}</div>
                </div>
              </MuiLink>
            </Link>
          </article>
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
      '& .wrapper': {
        background: theme.palette.background.paper,
        padding: `0 ${theme.spacing(2)}px ${theme.spacing(2)}px`,
        borderRadius: theme.spacing(1),
        height: '100%',
      },
      '& .arcImg': {
        display: 'inline-block',
        maxWidth: '100%',
        margin: `-${theme.spacing(2)}px 0 ${theme.spacing(2)}px`,
        borderRadius: theme.spacing(1),
        boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.1), 0 7px 10px -5px rgba(75, 192, 200, 0.2)',
        overflow: 'hidden',
      },
    },
  }),
);

export default ArticleLayout;
