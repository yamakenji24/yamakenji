import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import { Profile, Experience, Skills } from 'ui/top';
import { SkillType, getSkillAPI } from 'services/get-skill-api';
import { ExperienceType, getExperienceAPI } from 'services/get-experience-api';

interface Props {
  experiences: Array<ExperienceType>;
  skills: Array<SkillType>;
  ogImageUrl: string;
}

const Home = ({ experiences, skills, ogImageUrl }: Props): JSX.Element => {
  return (
    <Box>
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="yamakenji24 profile" />
        <meta property="og:title" content="yamakenji24 profile" />
        <meta property="og:image" content={ogImageUrl} />
      </Head>
      <Profile />
      <Experience experiences={experiences} />
      <Skills skills={skills} />
    </Box>
  );
};

export const getStaticProps = async (): Promise<{ props: Props }> => {
  const experiences = await getExperienceAPI();
  const skills = await getSkillAPI();

  return {
    props: {
      experiences,
      skills,
      ogImageUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/ogp?title=${'toppage'}`,
    },
  };
};

export default Home;
