import { Box, Link, Text, Flex, VStack, Image, useColorModeValue } from '@chakra-ui/react';
import { useMemo } from 'react';

interface Props {
  url: string;
  image: string;
  title: string;
  siteName: string;
  isoDate: string;
}

export const Article = ({ url, image, title, siteName, isoDate }: Props): JSX.Element => {
  const bgHoverColor = useColorModeValue('gray.200', 'gray.700');
  const date = useMemo(() => new Date(isoDate).toLocaleDateString(), [isoDate]);

  return (
    <Box maxWidth={['xs', 'md']}>
      <Link href={url} isExternal _hover={{ textDecoration: 'none' }}>
        <VStack
          borderRadius="xl"
          border="1px"
          borderColor="gray.400"
          spacing={0}
          _hover={{ bg: bgHoverColor, textDecoration: 'none' }}
        >
          <Image
            src={image}
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
            <Flex justifyContent='space-between'>
              <Text>{siteName}</Text>
              <time>{date}</time>
            </Flex>
          </Box>
        </VStack>
      </Link>
    </Box>
  );
};
