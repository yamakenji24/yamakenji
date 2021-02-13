import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Link as LinkIcon, GitHub as GitHubIcon } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Image from 'next/image';
import { workData } from '../../utils/workData';
import { Title } from '../title';
import { Skills } from './component/skills';

export const WorkLayout = (): JSX.Element => {
  const classes = worklayoutStyles();

  return (
    <section className={classes.work}>
      <Container maxWidth="md" className="container">
        {workData.map((work) => (
          <article key={work.github}>
            <Image src={work.img} width="420" height="250" alt={work.title} className="arcImg" />
            <div style={{ textAlign: 'center' }} className="link-icons">
              <IconButton color="inherit" href={work.github ?? ''}>
                <GitHubIcon />
              </IconButton>
              <IconButton color="inherit" href={work.link ?? ''}>
                <LinkIcon />
              </IconButton>
            </div>

            <Title title={work.title} fontSize="h5" />

            <p>{work.body}</p>
            <Skills skills={work.skills} />
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
      '& .arcImg': {
        margin: `-${theme.spacing(2)}px 0 ${theme.spacing(2)}px`,
        borderRadius: theme.spacing(1),
        boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.1), 0 7px 10px -5px rgba(75, 192, 200, 0.2)',
        overflow: 'hidden',
      },
      '& .link-icons': {
        margin: `${theme.spacing(1)}px 0`,
      },
    },
  }),
);
