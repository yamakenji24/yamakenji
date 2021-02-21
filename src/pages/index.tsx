import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { TopLayout } from '../ui/top/topLayout';
import { TopImage } from '../ui/top/topImage';

const Home = () => {
  const classes = sectionStyles();

  return (
    <div className={classes.main}>
      <TopImage />
      <TopLayout tag="Profile" />
      <TopLayout tag="Experience" />
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
  })
);

export default Home;
