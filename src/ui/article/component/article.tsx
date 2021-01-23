import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { ArticleData } from '../../../utils/articleData';
import { URLPreview } from '../../urlPreview';

export const Article = ({ url, title, date }: ArticleData): JSX.Element => {
  const classes = articleStyles();

  return (
    <article className={classes.article}>
      <div className="wrapper">
        <URLPreview url={url} description={date} />
      </div>
    </article>
  );
};

const articleStyles = makeStyles((theme: Theme) =>
  createStyles({
    article: {
      '& .wrapper': {
        background: theme.palette.background.paper,
        padding: `0 5px 20px`,
        borderRadius: theme.spacing(2),
        height: '100%',
      },
    },
  }),
);
