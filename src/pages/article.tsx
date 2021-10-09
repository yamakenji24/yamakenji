import axios, { AxiosResponse } from 'axios';
import { Box } from '@chakra-ui/react';
import openGraphScraper from 'open-graph-scraper';
import { Title } from 'ui/title';
import { ArticleLayout } from 'ui/article/articleLayout';

interface OGPDataType {
  url: string;
  title: string;
  image: string;
}


interface Props {
  articles: Array<OGPDataType>;
}

const ArticleContainer = ({ articles }: Props): JSX.Element => {
  return (
    <Box>
      <Title title="Articles" fontSize="h4" />
      <ArticleLayout articles={articles} />
    </Box>
  );
};

export const getStaticProps = async () => {
  const articles = await axios
    .get(process.env.NEXT_PUBLIC_ARTICLE_URL, {
      headers: { 'X-API-KEY': process.env.NEXT_PUBLIC_X_API_KEY },
    })
    .then(({ data }: AxiosResponse<GetArticlesResponse>) => {
      return Promise.all(data.contents.map((content) => getOGPData(content)));
    })
    .catch((err) => null);

  return {
    props: {
      articles,
    },
  };
};

const getOGPData = async (article) => {
  const data = await openGraphScraper({
    url: article.url,
    timeout: 10000,
    onlyGetOpenGraphInfo: true,
  });

  if (!data.result.success || data.error) {
    return Promise.resolve({ 
      url: article.url,
      title: "検索中",
      image: "/not_found.png",
    });
  }

  return Promise.resolve({
    url: article.url,
    title: data.result.ogTitle,
    image: data.result.ogImage.url,
  });
};

interface GetArticlesResponse {
  contents: Array<{
    id: string;
    url: string;
    title: string;
    img: {
      url: string;
      height: number;
      width: number;
    };
    date: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
  }>;
  totalCount: number;
  offset: number;
  limit: number;
}


export default ArticleContainer;
