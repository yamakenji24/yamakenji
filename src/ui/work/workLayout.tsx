import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Link as LinkIcon, GitHub as GitHubIcon } from '@material-ui/icons';
import { Chip, IconButton, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Image from 'next/image';
import { workData } from './workData';

const WorkLayout = (): JSX.Element => {
  const classes = worklayoutStyles();

  return (
    <section className={classes.work}>
      <Container maxWidth="md" className="container">
        {workData.map((work) => (
          <article key={work.github}>
            <div className="sectionHeader">
              <Image src={work.img} width="420" height="250" alt={work.title} className="arcImg" />
              <div style={{ textAlign: 'center' }} className="link-icons">
                <IconButton color="inherit" href={work.github ?? ''}>
                  <GitHubIcon />
                </IconButton>
              </div>
            </div>

            <div className="sectionBody">
              <Typography variant="h5" className="title">
                {work.title}
              </Typography>
              <div className="worksBody">{work.body}</div>
              <div className="skills">
                {work.skills.map((skill) => {
                  return (
                    <Chip
                      key={skill}
                      size="small"
                      label={skill}
                      color="primary"
                      variant="outlined"
                    />
                  );
                })}
              </div>
            </div>
          </article>
        ))}
      </Container>
    </section>
  );
};

const worklayoutStyles = makeStyles((theme: Theme) =>
  createStyles({
    work: {
      '& > .container': {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridGap: theme.spacing(4),
        [theme.breakpoints.down('xs')]: {
          gridTemplateColumns: '1fr',
        },
      },
      '& article': {
        position: 'relative',
      },
      '& .arcImg': {
        display: 'inline-block',
        maxWidth: '100%',
        margin: `-${theme.spacing(2)}px 0 ${theme.spacing(2)}px`,
        borderRadius: theme.spacing(1),
        boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.1), 0 7px 10px -5px rgba(75, 192, 200, 0.2)',
        overflow: 'hidden',
      },
      '& .link-icons': {
        margin: `${theme.spacing(1)}px 0`,
      },
      '& .skills > *': {
        margin: theme.spacing(0.5),
      },
    },
  }),
);
export default WorkLayout;
