import { Box, Container, Grid, Text, Link, Icon } from '@chakra-ui/react';
import Image from 'next/image';
import { FaGithub, FaLink } from 'react-icons/fa';
import { WorkType } from 'services/get-work-api';
import { Title } from 'ui/common/title';
import { Skills } from 'ui/work/component/skills';
import { EmptyLayout } from 'ui/common/emptyLayout';

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
        {works.map((work: WorkType) => (
          <Work key={work.id} {...work} />
        ))}
      </Grid>
    </Container>
  );
};

const Work = ({ image, title, github, url, description, skills }: WorkType): JSX.Element => (
  <Box pos="relative">
    <Image src={image.url} width="420" height="250" alt={title} />
    <Box textAlign="center" mt="8px">
      <Link href={github ?? ''} color="inherit" mx="4">
        <Icon as={FaGithub} boxSize="1.5em" />
      </Link>
      <Link href={url ?? ''} color="inherit" mx="4">
        <Icon as={FaLink} boxSize="1.5em" />
      </Link>
    </Box>
    <Title title={title} fontSize="h5" />
    <Text>{description}</Text>
    <Skills skills={skills} />
  </Box>
);
