import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Profile } from './component//profile';
import Experience from './component/experience';
import { Title } from '../../ui/title';

interface Props {
  tag: 'Profile' | 'Experience';
}

export const TopLayout = ({ tag }: Props): JSX.Element => {
  const classes = sectionStyles();
  const tags = {
    Profile: Profile,
    Experience: Experience,
  };

  const TagName = tags[tag];

  return (
    <section className={classes.section}>
      <Container maxWidth="md" className="container">
        <div className="sectionHeader">
          <Title title={tag} fontSize="h4" />
        </div>
        <div className="sectionBody">
          <TagName />
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
        flexDirection: 'row',
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
        },
        '& > .sectionHeader': {
          flex: 1,
          paddingBottom: theme.spacing(4),
        },
        '& > .sectionBody': {
          flex: 2,
        },
      },
    },
  }),
);
