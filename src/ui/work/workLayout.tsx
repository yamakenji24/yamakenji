import { Box, Image, Flex, Grid, Text, Link, VStack, useColorModeValue } from '@chakra-ui/react';
import { WorkType } from 'services/get-work-api';
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
    <Flex w="100%">
      <Grid mx="auto" templateColumns={['1fr', 'repeat(2, 1fr)']} gap={8}>
        {works.map((work: WorkType) => (
          <Work key={work.id} {...work} />
        ))}
      </Grid>
    </Flex>
  );
};

const Work = ({ image, title, url, description, skills }: WorkType): JSX.Element => {
  const bg = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box maxWidth={['xs', 'md']}>
      <Link href={url} isExternal _hover={{ textDecoration: 'none' }}>
        <VStack
          borderRadius="xl"
          border="1px"
          borderColor="gray.400"
          spacing={0}
          _hover={{ bg: bg, textDecoration: 'none' }}
        >
          <Image
            src={image.url}
            alt={title}
            width="100%"
            maxHeight="2xs"
            borderTopRadius="xl"
            objectFit="cover"
          />
          <Box
            borderBottomRadius="xl"
            borderTop="1px"
            borderColor="gray.400"
            padding="3"
            width="100%"
          >
            <Text>{title}</Text>
            <Text>{description}</Text>
            <Skills skills={skills} />
          </Box>
        </VStack>
      </Link>
    </Box>
  );
};
