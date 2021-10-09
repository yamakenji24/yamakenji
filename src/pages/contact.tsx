import { Box } from '@chakra-ui/react';
import { Title } from 'ui/title';
import { ContactLayout } from 'ui/contact/contactLayout';

const Contact = (): JSX.Element => {

  return (
    <Box>
      <Title title="Contact" fontSize="h4" />
      <ContactLayout />
    </Box>
  );
};

export default Contact;
