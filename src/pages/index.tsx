import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import Profile from '../ui/top/profile';
import Experience from '../ui/top/experience';

const Home = () => {
  const classes = sectionStyles();

  return (
    <div className={classes.main}>
      <section className={classes.section}>
        <Container maxWidth="md" className="container">
          <div className="sectionHeader">
            <Typography variant="h4">Profile</Typography>
          </div>
          <div className="sectionBody">
            <Profile />
          </div>
        </Container>
      </section>

      <section className={classes.section}>
        <Container maxWidth="md" className="container">
          <div className="sectionHeader">
            <Typography variant="h4">Experience</Typography>
          </div>
          <div className="sectionBody">
            <Experience />
          </div>
        </Container>
      </section>
    </div>
  );
};

const sectionStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      '& section': {
        padding: `${theme.spacing(10)}px 0`,
      },
    },
    section: {
      '& > .container': {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
        },
        '& > .sectionHeader': {
          flex: 1,
          paddingBottom: theme.spacing(4),
          '& > .sectionTitle': {
            fontWeight: 700,
            letterSpacing: theme.spacing(0.5),
          },
        },
        '& > .sectionBody': {
          flex: 2,
        },
      },
    },
  }),
);

export default Home;
