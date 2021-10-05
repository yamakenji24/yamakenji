import { Box } from '@chakra-ui/react';
import { Profile, Experience, Skills } from 'ui/top';

const Home = (): JSX.Element => {

  return (
    <Box>
      <Profile />
      <Experience />
      <Skills />
    </Box>
  );
};

export default Home;
