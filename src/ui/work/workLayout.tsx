import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Link as LinkIcon, GitHub as GitHubIcon } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { workData, WorkData } from '../../utils/workData';
import { Skills } from './component/skills';
import { URLPreview } from '../urlPreview';

export const WorkLayout = (): JSX.Element => {
  const classes = worklayoutStyles();

  return (
    <section className={classes.work}>
      <Container maxWidth="md" className="container">
        {workData.map(({ github, link, title, body, skills }: WorkData) => (
          <article key={github}>
            <URLPreview url={link} description={body} />
            <div style={{ textAlign: 'center' }} className="link-icons">
              <IconButton color="inherit" href={github}>
                <GitHubIcon />
              </IconButton>
              <IconButton color="inherit" href={link}>
                <LinkIcon />
              </IconButton>
            </div>
            <Skills skills={skills} />
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
        [theme.breakpoints.down('sm')]: {
          gridTemplateColumns: '1fr',
        },
      },
      '& article': {
        position: 'relative',
      },
      '& .link-icons': {
        margin: `${theme.spacing(1)}px 0`,
      },
    },
  }),
);
