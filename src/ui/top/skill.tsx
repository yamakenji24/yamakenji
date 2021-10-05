import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { Title } from 'ui/title';

export const Skills = (): JSX.Element => {

  return (
    <Flex direction="column">
      <Title title="Skills" fontSize="h4" />
      <Flex wrap="wrap" justifyContent="center">
        <SkillList skills={skills} />
      </Flex>
    </Flex>
  );
};

const SkillList = ({ skills }) =>
  skills.map(
    (skill: Skill, idx: number): JSX.Element => (
      <Box key={idx} h="auto" w="30%" mb="1.5rem" p=".5rem" textAlign="center">
        <Flex alignItems="center" textAlign="center" justifyContent="center" h="3rem">
          <Image src={skill.url} width={skill.width} height="60" />
        </Flex>
        <Text pt=".75rem" fontWeight="bold" fontSize="1.5rem">
          {skill.name}
        </Text>
      </Box>
    ),
  );

interface Skill {
  url: string;
  name: string;
  width: string;
}

const skills: Array<Skill> = [
  {
    url: '/skills/react.svg',
    name: 'React',
    width: '60',
  },
  {
    url: '/skills/typescript.svg',
    name: 'TypeScript',
    width: '60',
  },
  {
    url: '/skills/nextjs.svg',
    name: 'Next.js',
    width: '80',
  },
  {
    url: '/skills/go.png',
    name: 'Go',
    width: '140',
  },
  {
    url: '/skills/rails.svg',
    name: 'Ruby on Rails',
    width: '140',
  },
  {
    url: '/skills/ruby.png',
    name: 'Ruby',
    width: '60',
  },
  {
    url: '/skills/linux.svg',
    name: 'Linux',
    width: '60',
  },
  {
    url: '/skills/git.png',
    name: 'Git/GitHub',
    width: '60',
  },
];
