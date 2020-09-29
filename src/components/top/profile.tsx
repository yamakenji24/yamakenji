import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ProgressBar from './progressBar';

const Profile = () => {
  const classes = profileStyles();

  return (
    <div className={classes.profile}>
      <div className="header">
        <div className="title">Kenji Yamashita</div>
        <div className="job">Master's Student</div>
      </div>
      <div className="body">
        <dl>
          <dt>Birth</dt>
          <dd>1997/08/02 (23 years old) </dd>
        </dl>
        <dl>
          <dt>Skills</dt>
          <ProgressBar />
        </dl>
      </div>
    </div>
  );
};

const profileStyles = makeStyles((theme: Theme) =>
  createStyles({
    profile: {
      background: theme.palette.background.paper,
      marginTop: theme.spacing(2),
      padding: `0 ${theme.spacing(2)}px ${theme.spacing(2)}px`,
      borderRadius: theme.spacing(1),
      boxShadow: '0 1px 4px 1px rgba(0, 0, 0, 0.1)',
      '& > .header': {
        display: 'inline-block',
        color: '#eaeaea',
        background: theme.palette.primary.main,
        margin: `-${theme.spacing(2)}px 0 ${theme.spacing(4)}px`,
        padding: theme.spacing(2),
        borderRadius: theme.spacing(1),
        boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.1), 0 7px 10px -5px rgba(75, 192, 200, 0.2)',
        '& > .title': {
          paddingBottom: theme.spacing(0.5),
          fontWeight: 700,
          fontSize: '1.6rem',
          lineHeight: 1.0,
        },
        '& > .job': {
          lineHeight: 1.0,
        },
      },
      '& > .body > dl': {
        margin: `0 0 ${theme.spacing(2)}px`,
        '& > dt': {
          color: theme.palette.text.secondary,
          fontWeight: 700,
          fontSize: '1.2rem',
        },
        '& > dd': {
          paddingTop: theme.spacing(0.5),
        },
      },
    },
  }),
);

export default Profile;
