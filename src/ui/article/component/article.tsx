import { Box, Link, Text, VStack, Image, useColorModeValue } from '@chakra-ui/react';

interface Props {
  url: string;
  image: string;
  title: string;
}

export const Article = ({ url, image, title }: Props): JSX.Element => {
  const bgHoverColor = useColorModeValue('gray.200', 'gray.700');

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
            <Text>{url}</Text>
          </Box>
        </VStack>
      </Link>
    </Box>
  );
};
