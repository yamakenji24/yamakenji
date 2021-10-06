import Image from 'next/image';
import { Box, Link, Text } from '@chakra-ui/react';
import { ArticleType } from 'utils/articleData';
import { Title } from 'ui/title';

type ArticleData = Omit<ArticleType, 'id'>;

export const Article = ({ url, img, title, date }: ArticleData): JSX.Element => {
  return (
    <Box pos="relative">
      <Link href={url}>
        <Box bg="#CCFFFF" px="8px" pb="8px" borderRadius="8" h="100%">
          <Image src={img} width="440" height="260" />
          <Title title={title} fontSize="h6" />
          <Text>{date}</Text>
        </Box>
      </Link>
    </Box>
  );
};