import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

interface Props {
  title: string;
  fontSize: 'h4' | 'h5' | 'h6';
}

export const Title = ({ title, fontSize }: Props) => {
  const classes = titleStyles();

  return (
    <Typography variant={fontSize} className={classes.title}>
      {title}
    </Typography>
  );
};

const titleStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontWeight: 700,
      letterSpacing: theme.spacing(0.5),
      textAlign: 'center',
    },
  }),
);
