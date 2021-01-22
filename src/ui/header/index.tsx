import { AppBar, Toolbar } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Image from 'next/image';
import Nav from './nav';

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="sticky" className={classes.navbar}>
      <Container maxWidth="md">
        <Toolbar className={classes.toolbar}>
          <Image src="/logo.png" width="60" height="50" />
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
      display: 'flex',
      justifyContent: 'space-between',
    },
  }),
);

export default Header;
