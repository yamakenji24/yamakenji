import { Title } from 'ui/common/title';
import { ContactLayout } from 'ui/contact/contactLayout';
import { Layout } from 'ui/common/Layout';

const Contact = (): JSX.Element => {
  return (
    <Layout>
      <Title title="Contact" fontSize="h4" />
      <ContactLayout />
    </Layout>
  );
};

export default Contact;
