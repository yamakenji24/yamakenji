import * as React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Nav from './nav';

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="sticky" className={classes.navbar}>
      <Container maxWidth="md">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h4" className={classes.title} noWrap>
            yamakenji Profile
          </Typography>
          <Nav />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navbar: {
      boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.1), 0 7px 10px -5px rgba(0, 0, 0, 0.2)',
      background: '#222222',
    },
    toolbar: {
      padding: '0',
      display: 'grid',
      gridTemplate: '"title . nav" auto / auto 1fr auto',
    },
    title: {
      gridArea: 'title',
    },
  }),
);

export default Header;
