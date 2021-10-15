import { Heading } from '@chakra-ui/react';

interface Props {
  title: string;
  fontSize: 'h4' | 'h5' | 'h6';
}

export const Title = ({ title, fontSize }: Props): JSX.Element => {

  return (
    <Heading 
      as={fontSize} 
      size="xl"
      fontWeight="bold"
      letterSpacing="wide"
      textAlign="center"
      my="12"
    >
      {title}
    </Heading>
  );
};
