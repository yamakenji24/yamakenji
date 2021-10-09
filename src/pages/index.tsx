import { Box } from '@chakra-ui/react';
import axios from 'axios';
import { Profile, Experience, Skills } from 'ui/top';
import type { ExperienceType, SkillType } from 'utils/expType'

interface Props {
  experiences: Array<ExperienceType>;
  skills: Array<SkillType>;
}

const Home = ({experiences, skills}: Props): JSX.Element => {
  return (
    <Box>
      <Profile />
      <Experience experiences={experiences}/>
      <Skills skills={skills}/>
    </Box>
  );
};

export const getStaticProps = async() => {
  const experiences = await axios.get(process.env.NEXT_PUBLIC_EXPERIENCE_URL, {
    headers: { 'X-API-KEY': process.env.NEXT_PUBLIC_X_API_KEY },
  }).then(({data}) => data.contents.map((experience) => ({
    id: experience.id,
    title: experience.title,
    body: experience.body,
    during: experience.during,
  })))
  .catch(() => null);

const skills = await axios.get(process.env.NEXT_PUBLIC_SKILL_URL, {
  headers: { 'X-API-KEY': process.env.NEXT_PUBLIC_X_API_KEY },
}).then(({data}) => data.contents.map((skill) => ({
  id: skill.id,
  name: skill.name,
  img: skill.img.url,
})))
.catch(() => null);

  return {
    props: {
      experiences,
      skills,
    }
  }
}

export default Home;
