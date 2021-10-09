import { Box, Container, Grid, Text, Link, Icon } from '@chakra-ui/react';
import Image from 'next/image';
import { FaGithub, FaLink } from 'react-icons/fa';
import { WorkType } from 'utils/types';
import { Title } from 'ui/title';
import { Skills } from 'ui/work/component/skills';
import { EmptyLayout } from 'ui/emptyLayout';

interface Props {
  works: Array<WorkType>;
}

export const WorkLayout = ({ works }: Props): JSX.Element => {
  if (works == null) {
    return <EmptyLayout />;
  }

  return (
    <Container maxW="5xl">
      <Grid templateColumns={['1fr', '1fr', 'repeat(2, 1fr)']} gap={16} textAlign="center">
        <WorkList works={works} />
      </Grid>
    </Container>
  );
};

const WorkList = ({ works }): JSX.Element =>
  works.map((work: WorkType) => (
    <Box key={work.id} pos="relative">
      <Image src={work.img} width="420" height="250" alt={work.title} />
      <Box textAlign="center" mt="8px">
        <Link href={work.github ?? ''} color="inherit" mx="4">
          <Icon as={FaGithub} boxSize="1.5em" />
        </Link>
        <Link href={work.link ?? ''} color="inherit" mx="4">
          <Icon as={FaLink} boxSize="1.5em" />
        </Link>
      </Box>
      <Title title={work.title} fontSize="h5" />
      <Text>{work.body}</Text>
      <Skills skills={work.skills} />
    </Box>
  ));