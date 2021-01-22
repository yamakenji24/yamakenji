import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Title } from '../../title';
import { expData } from '../../../utils/expData';

const Experience = () => {
  const classes = experienceStyles();

  return (
    <div className={classes.timeline}>
      {expData.map((exp, idx) => (
        <div className="entry" key={idx}>
          <div className="header">
            <p className="during">{exp.during}</p>
            <Title title={exp.title} fontSize="h5" />
          </div>
          <div className="body">{exp.body}</div>
        </div>
      ))}
    </div>
  );
};

const experienceStyles = makeStyles((theme: Theme) =>
  createStyles({
    timeline: {
      background: '#CBFFD3',
      position: 'relative',
      padding: `${theme.spacing(2)}px 0 ${theme.spacing(2)}px ${theme.spacing(4)}px`,
      '& .entry': {
        position: 'relative',
        marginBottom: theme.spacing(4),
        '&:after': {
          content: '""',
          position: 'absolute',
          top: theme.spacing(0.25),
          left: `-${theme.spacing(4)}px`,
          height: theme.spacing(2),
          width: theme.spacing(2),
          background: theme.palette.primary.main,
          boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.1), 0 7px 10px -5px rgba(75, 192, 200, 0.2)',
          borderRadius: '50%',
          zIndex: 2,
        },
      },
      '& p': {
        margin: `0`,
      },
      '& .during': {
        color: theme.palette.text.secondary,
        marginBottom: theme.spacing(1),
      },
      '& .title': {
        fontWeight: 700,
        marginBottom: theme.spacing(1.5),
      },
      '& .body': {
        background: theme.palette.background.paper,
        boxShadow: '0 1px 4px 1px rgba(0, 0, 0, 0.1)',
        borderRadius: theme.spacing(1),
        padding: theme.spacing(2),
        width: '95%',
      },
      '&:after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: theme.spacing(0.75),
        height: '100%',
        width: theme.spacing(0.5),
        background: '#eaeaea',
        borderRadius: theme.spacing(0.25),
        zIndex: 1,
      },
    },
  }),
);

export default Experience;
