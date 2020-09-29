import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const skillData = [
  {
    name: 'React/Redux',
    value: 60,
  },
  {
    name: 'TypeScript',
    value: 45,
  },
  {
    name: 'golang/gin',
    value: 50,
  },
  {
    name: 'Graphql/Apollo Client',
    value: 30,
  },
];

const ProgressBar = () => {
  const classes = progressStyles();

  return (
    <>
      {skillData.map((skill, idx) => (
        <dd key={idx}>
          <div className={classes.progress}>
            <p>{skill.name}</p>
            <progress value={skill.value} max="100" />
          </div>
        </dd>
      ))}
    </>
  );
};

const progressStyles = makeStyles((theme: Theme) =>
  createStyles({
    progress: {
      display: 'flex',
      '& > p': {
        width: '35%',
      },
      '& > progress': {
        margin: '15px',
      },
    },
  }),
);

export default ProgressBar;
