import axios, { AxiosResponse } from 'axios';
import { Box } from '@chakra-ui/react';
import { Title } from 'ui/title';
import { ArticleLayout } from 'ui/article/articleLayout';
import { GetArticlesResponse, ArticleType } from 'utils/articleData';

interface Props {
  articles: Array<ArticleType>;
}

const Article = ({ articles }: Props): JSX.Element => {
  return (
    <Box>
      <Title title="Articles" fontSize="h4" />
      <ArticleLayout articles={articles} />
    </Box>
  );
};

export const getStaticProps = async (): Promise<{
  props: Props;
}> => {
  const articles = await axios
    .get(process.env.NEXT_PUBLIC_ARTICLE_URL, {
      headers: { 'X-API-KEY': process.env.NEXT_PUBLIC_X_API_KEY },
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

export default Article;
