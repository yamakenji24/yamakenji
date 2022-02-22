import { Box, Image, Text, Link, VStack, useColorModeValue } from '@chakra-ui/react';
import { Skills } from './skills';
import { WorkItem } from 'builder/works';

export const Work = ({ skills, url, body, ogImageURL, title }: WorkItem): JSX.Element => {
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
            src={ogImageURL}
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
            <Text>{body}</Text>
            <Skills skills={skills} />
          </Box>
        </VStack>
      </Link>
    </Box>
  );
};
