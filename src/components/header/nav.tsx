import * as React from 'react';
import Link from 'next/link';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

const Nav = () => {
  const classes = useStyles();

  return (
    <nav className={classes.nav}>
      <Link href="/">Top</Link>

      <Link href="/about">About</Link>

      <Link href="/work">Work</Link>

      <IconButton color="inherit" href="https://github.com/yamakenji24">
        <GitHubIcon />
      </IconButton>
    </nav>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nav: {
      gridArea: 'nav',
      display: 'flex',
      flexDirection: 'row',
      height: '100%',
      '& > *': {
        display: 'flex',
        alignItems: 'center',
      },
      '& > a': {
        position: 'relative',
        transition: 'all 0.3s ease-in-out',
        height: '100%',
        color: 'inherit',
        padding: `0 ${theme.spacing(2)}px`,
        fontWeight: 700,
        '&:after': {
          content: '" "',
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: theme.spacing(0.5),
          width: '100%',
          background: theme.palette.primary.main,
          transition: 'transform 0.3s ease-in-out',
          transform: 'scale(0, 1)',
          transformOrigin: 'center top',
        },
        '&:hover, &.selected': {
          textDecoration: 'none',
          color: theme.palette.primary.main,
          '&:after': {
            transform: 'scale(1, 1)',
          },
        },
      },
    },
  }),
);

export default Nav;
