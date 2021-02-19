import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import axios, { AxiosResponse } from 'axios';
import { Title } from '../ui/title';
import { ArticleLayout } from '../ui/article/articleLayout';
import { GetArticlesResponse, ArticleType } from '../utils/articleData';

interface Props {
  articles: Array<ArticleType>;
}

const Article = ({ articles }: Props): JSX.Element => {
  const classes = articleStyles();
  console.log(articles);
  return (
    <div className={classes.main}>
      <section>
        <Title title="Articles" fontSize="h4" />
      </section>
      <ArticleLayout articles={articles} />
    </div>
  );
};

export const getStaticProps = async (): Promise<{
  props: Props;
}> => {
  const articles = await axios
    .get(process.env.ARTICLE_URL, {
      headers: { 'X-API-KEY': process.env.X_API_KEY },
    })
    .then(({ data }: AxiosResponse<GetArticlesResponse>) =>
      data.contents.map((value) => ({
        id: value.id,
        url: value.url,
        title: value.title,
        img: value.img.url,
        date: value.date,
      })),
    )
    .catch(() => null);

  return {
    props: {
      articles,
    },
  };
};

const articleStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      '& section': {
        padding: `${theme.spacing(7)}px 0`,
      },
    },
  }),
);

export default Article;
