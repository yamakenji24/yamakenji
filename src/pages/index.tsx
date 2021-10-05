import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { TopImage, Profile, Experience, Skills } from 'ui/top';

const Home = (): JSX.Element => {
  const classes = sectionStyles();

  return (
    <div className={classes.main}>
      <TopImage />
      <Profile />
      <Experience />
      <Skills />
    </div>
  );
};

const sectionStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      '& section': {
        padding: `${theme.spacing(10)}px 0`,
      },
    },
  })
);

export default Home;
