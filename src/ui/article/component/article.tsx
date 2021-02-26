import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Image from 'next/image';
import MuiLink from '@material-ui/core/Link';
import { ArticleType } from '../../../utils/articleData';
import { Title } from '../../title';

type ArticleData = Omit<ArticleType, 'id'>;

export const Article = ({ url, img, title, date }: ArticleData): JSX.Element => {
  const classes = articleStyles();

  return (
    <article className={classes.article}>
      <MuiLink href={url}>
        <div className="wrapper">
          <Image src={img} width="390" height="240" className="arcImg" />
          <Title title={title} fontSize="h5" />
          <div className="date">{date}</div>
        </div>
      </MuiLink>
    </article>
  );
};

const articleStyles = makeStyles((theme: Theme) =>
  createStyles({
    article: {
      '& .wrapper': {
        background: theme.palette.background.paper,
        padding: `0 ${theme.spacing(2)}px ${theme.spacing(2)}px`,
        borderRadius: theme.spacing(1),
        height: '100%',
      },
      '& .arcImg': {
        margin: `-${theme.spacing(2)}px 0 ${theme.spacing(2)}px`,
        borderRadius: theme.spacing(1),
        boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.1), 0 7px 10px -5px rgba(75, 192, 200, 0.2)',
      },
    },
  }),
);
