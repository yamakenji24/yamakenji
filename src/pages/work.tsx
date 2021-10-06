import axios, { AxiosResponse } from 'axios';
import { Box } from '@chakra-ui/react';
import { Title } from 'ui/title';
import { WorkLayout } from 'ui/work/workLayout';
import { GetWorksResponse, WorkType } from 'utils/workData';

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

export const getStaticProps = async () => {
  const works = await axios
    .get(process.env.NEXT_PUBLIC_WORK_URL, {
      headers: { 'X-API-KEY': process.env.NEXT_PUBLIC_X_API_KEY },
    })
    .then(({ data }: AxiosResponse<GetWorksResponse>) =>
      data.contents.map((value) => ({
        id: value.id,
        github: value.github,
        link: value.link,
        img: value.img.url,
        title: value.title,
        skills: value.skills,
        body: value.body,
      })),
    )
    .catch(() => null);

  return {
    props: {
      works,
    },
  };
};

export default Work;
