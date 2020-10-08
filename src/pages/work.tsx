import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Title from '../components/title';
import WorkLayout from '../components/work/workLayout';

const Work = () => {
  const classes = worksStyles();

  return (
    <div className={classes.main}>
      <Title title="Works" />
      <WorkLayout />
    </div>
  );
};

const worksStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      '& section': {
        padding: `${theme.spacing(10)}px 0`,
      },
    },
  }),
);

export default Work;
