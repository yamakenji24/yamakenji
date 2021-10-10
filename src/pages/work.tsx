import { Box } from '@chakra-ui/react';
import { Title } from 'ui/title';
import { WorkLayout } from 'ui/work/workLayout';
import { WorkType, getWorkAPI } from 'services/get-work-api';

interface Props {
  works: Array<WorkType>;
}

const Work = ({ works }: Props): JSX.Element => {
  return (
    <Box>
      <Title title="Works" fontSize="h4" />
      <WorkLayout works={works} />
    </Box>
  );
};

export const getStaticProps = async (): Promise<{ props: Props }> => {
  const works = await getWorkAPI();

  return {
    props: {
      works,
    },
  };
};

export default Work;
