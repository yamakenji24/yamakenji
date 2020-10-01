import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const Title = () => {
  const classes = titleStyles();

  return (
    <section>
      <Container maxWidth="md">
        <Typography variant="h4" className={classes.title}>
          Articles
        </Typography>
      </Container>
    </section>
  );
};

const titleStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontWeight: 700,
      letterSpacing: theme.spacing(0.5),
      marginBottom: theme.spacing(1),
      textAlign: 'center',
    },
  }),
);

export default Title;
