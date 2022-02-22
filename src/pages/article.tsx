import { useState, useEffect } from 'react';
import { Flex, Grid } from '@chakra-ui/react';
import { Title } from 'ui/common/title';
import { Layout } from 'ui/common/Layout';
import { Article, SiteTabs, getSitedPosts } from 'ui/article';
import type { PostItem } from 'builder/posts';

interface Props {
  ogImageUrl: string;
}

const ArticleContainer = ({ ogImageUrl }: Props): JSX.Element => {
  const [siteName, setSiteName] = useState('All');
  const [posts, setPosts] = useState<PostItem[]>([]);

  useEffect(() => {
    const newPosts = getSitedPosts(siteName);
    setPosts(newPosts);
  }, [siteName])

  const handleChangeSiteName = (newSiteName: string) => setSiteName(newSiteName);

  return (
    <Layout ogImageUrl={ogImageUrl}>
      <Title title="Articles" fontSize="h4" />
      <Flex w="100%" flexDir='column'>
        <SiteTabs handleChangeSiteName={handleChangeSiteName}/>
        <Grid mx="auto" templateColumns={['1fr', 'repeat(2, 1fr)']} gap={8}>
        {posts.map((post: PostItem, idx: number) => (
          <Article 
            key={idx}
            url={post.link}
            image={post.ogImageURL}
            title={post.title}
            siteName={post.siteName}
            isoDate={post.isoDate}
          />
        ))}
        </Grid>
      </Flex>
    </Layout>
  );
};

export const getStaticProps = async (): Promise<{ props: Props }> => {

  return {
    props: {
      ogImageUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/ogp?title=${'articles'}`,
    },
  };
};

export default ArticleContainer;
