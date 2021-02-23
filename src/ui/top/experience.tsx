import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Container } from '@material-ui/core/';
import { Title } from '../../ui/title';
import { expData } from '../../utils/expData';

export const Experience = () => {
  const classes = sectionStyles();

  return (
    <section className={classes.section}>
      <Container maxWidth="md" className="container">
        <Title title="Experience" fontSize="h4" />
        <div className={classes.timeline}>
          {expData.map((exp, idx) => (
            <div className="entry" key={idx}>
              <div>
                <p className="during">{exp.during}</p>
                <div className="title">{exp.title}</div>
              </div>
              <div className="body">{exp.body}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

const sectionStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
      '& > .container': {
        display: 'flex',
        flexDirection: 'column',
      },
    },
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
        marginBottom: theme.spacing(1),
      },
      '& .title': {
        fontWeight: 700,
        fontSize: '1.5rem',
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
