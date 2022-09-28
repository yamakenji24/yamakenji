import { Flex, Grid } from '@chakra-ui/react';
import { Title } from 'ui/common/title';
import { Layout } from 'ui/common/Layout';
import { Work, getWorks } from 'ui/work';
import { WorkItem } from 'builder/works';

interface Props {
  ogImageUrl: string;
}

const WorkContainer = ({ ogImageUrl }: Props): JSX.Element => {
  const works = getWorks();

  return (
    <Layout ogImageUrl={ogImageUrl}>
      <Title title="Works" fontSize="h4" />
      <Flex w="100%">
        <Grid mx="auto" templateColumns={['1fr', 'repeat(2, 1fr)']} gap={8}>
          {works.map((work: WorkItem, idx: number) => (
            <Work key={idx} {...work} />
          ))}
        </Grid>
      </Flex>
    </Layout>
  );
};

export const getStaticProps = async (): Promise<{ props: Props }> => {
  return {
    props: {
      ogImageUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/ogp?title=${'works'}`,
    },
  };
};

export default WorkContainer;
