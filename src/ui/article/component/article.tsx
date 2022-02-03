import { Box, Link, Text, VStack, Image } from '@chakra-ui/react';

export const Article = ({ url, image, title }): JSX.Element => {

  return (
    <Box maxWidth={["xs", "md"]}>
      <Link href={url} isExternal _hover={{ textDecoration: "none" }}>
      <VStack
          borderRadius="xl"
          border="1px"
          borderColor="gray.400"
          spacing={0}
          _hover={{ bg: "gray.200", textDecoration: "none" }}
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
            <Text color="gray.500">{url}</Text>
          </Box>
        </VStack>
      </Link>
    </Box>
  );
};