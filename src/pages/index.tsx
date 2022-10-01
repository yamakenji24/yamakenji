import type { NextPage, GetStaticProps } from 'next';
import { Profile, Experience, Skills } from 'ui/top';
import { SkillType, getSkillAPI } from 'services/get-skill-api';
import { ExperienceType, getExperienceAPI } from 'services/get-experience-api';
import { Layout } from 'ui/common/Layout';

interface Props {
  experiences: Array<ExperienceType>;
  skills: Array<SkillType>;
  ogImageUrl: string;
}
const Home: NextPage<Props> = ({ experiences, skills, ogImageUrl }): JSX.Element => {
  return (
    <Layout ogImageUrl={ogImageUrl}>
      <Profile />
      <Experience experiences={experiences} />
      <Skills skills={skills} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
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
