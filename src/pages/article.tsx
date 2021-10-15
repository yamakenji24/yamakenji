import { Title } from 'ui/common/title';
import { Layout } from 'ui/common/Layout';
import { ArticleLayout } from 'ui/article/articleLayout';
import { getArticleAPI } from 'services/get-article-api';
import { OGPDataType } from 'services/get-ogp';

interface Props {
  articles: Array<OGPDataType>;
  ogImageUrl: string;
}

const ArticleContainer = ({ articles, ogImageUrl }: Props): JSX.Element => {
  return (
    <Layout ogImageUrl={ogImageUrl}>
      <Title title="Articles" fontSize="h4" />
      <ArticleLayout articles={articles} />
    </Layout>
  );
};

export const getStaticProps = async (): Promise<{ props: Props }> => {
  const articles = await getArticleAPI();

  return {
    props: {
      articles,
      ogImageUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/ogp?title=${'articles'}`,
    },
  };
};

export default ArticleContainer;
