import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Image from 'next/image';
import { Title } from 'ui/title';

export const Skills = (): JSX.Element => {
  const classes = skillStyles();

  return (
    <section>
      <Container maxWidth="md" className="container">
        <Title title="Skills" fontSize="h4" />
        <div className={classes.skill}>
          {skills.map((skill: Skill, idx: number) => (
            <div className="skillCard" key={idx}>
              <div className="skillLogo">
                <Image src={skill.url} width={skill.width} height="60"/>
              </div>
              <div className="skillTitle">{skill.name}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

const skillStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
      '& > .container': {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
        },
      },
    },
    skill: {
      display: 'flex',
      flexWrap: 'wrap',
    
      '& >.skillCard': {
        height: 'auto',
        width: '50%',
        marginBottom: '1.5rem',
        padding: '.5rem',
        textAlign: 'center',
        '& >.skillLogo': {
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          justifyContent: 'center',
          height: '3rem',
        },
        '& >.skillTitle': {
          paddingTop: '.75rem',
          fontWeight: '700',
          fontSize: '1.5rem',
        }
      }
    },
  })
)

interface Skill {
  url: string;
  name: string;
  width: string;
}

const skills: Array<Skill> = [
  {
    url: '/skills/react.svg',
    name: 'React',
    width: '60',
  },
  {
    url: '/skills/typescript.svg',
    name: 'TypeScript',
    width: '60',
  },
  {
    url: '/skills/nextjs.svg',
    name: 'Next.js',
    width: '80',
  },
  {
    url: '/skills/go.png',
    name: 'Go',
    width: '140',
  },
  {
    url: '/skills/rails.svg',
    name: 'Ruby on Rails',
    width: '140',
  },
  {
    url: '/skills/ruby.png',
    name: 'Ruby',
    width: '60',
  },
  {
    url: '/skills/linux.svg',
    name: 'Linux',
    width: '60',
  },
  {
    url: '/skills/git.png',
    name: 'git/github',
    width: '60',
  },
];
