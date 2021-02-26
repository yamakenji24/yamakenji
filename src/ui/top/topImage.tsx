import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const TopImage = (): JSX.Element => {
  const classes = sectionStyles();

  return (
    <div className={classes.topimage}>
      <div className="profile">
        <div className="nickname">yamakenji24</div>
      </div>
    </div>
  );
};

const sectionStyles = makeStyles((theme: Theme) =>
  createStyles({
    topimage: {
      height: '500px',
      backgroundImage: 'url(/topimage.png)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50%',
      backgroundSize: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',

      '& >.profile': {
        '& > .nickname': {
          fontSize: '3.00rem',
          fontWeight: '600',
        }
      },
    }
  })
);