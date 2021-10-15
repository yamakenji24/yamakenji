import { Title } from 'ui/common/title';
import { Layout } from 'ui/common/Layout';
import { WorkLayout } from 'ui/work/workLayout';
import { WorkType, getWorkAPI } from 'services/get-work-api';

interface Props {
  works: Array<WorkType>;
  ogImageUrl: string;
}

const Work = ({ works, ogImageUrl }: Props): JSX.Element => {
  return (
    <Layout ogImageUrl={ogImageUrl}>
      <Title title="Works" fontSize="h4" />
      <WorkLayout works={works} />
    </Layout>
  );
};

export const getStaticProps = async (): Promise<{ props: Props }> => {
  const works = await getWorkAPI();

  return {
    props: {
      works,
      ogImageUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/ogp?title=${'works'}`,
    },
  };
};

export default Work;
