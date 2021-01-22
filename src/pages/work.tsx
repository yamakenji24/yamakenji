import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Title } from '../ui/title';
import { WorkLayout } from '../ui/work/workLayout';

const Work = () => {
  const classes = worksStyles();

  return (
    <div className={classes.main}>
      <section>
        <Title title="Works" fontSize="h4" />
      </section>
      <WorkLayout />
    </div>
  );
};

const worksStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      '& section': {
        padding: `${theme.spacing(7)}px 0`,
      },
    },
  }),
);

export default Work;
