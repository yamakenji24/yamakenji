import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { EmptyLayout } from 'ui/emptyLayout';
import { Title } from 'ui/title';
import type { SkillType } from 'utils/types';

export const Skills = ({ skills }: { skills: Array<SkillType> }): JSX.Element => {

  return (
    <Flex direction="column">
      <Title title="Skills" fontSize="h4" />
      <Flex wrap="wrap" justifyContent="center">
        {skills == null ? <EmptyLayout /> : <SkillList skills={skills} />}
      </Flex>
    </Flex>
  );
};

const SkillList = ({ skills }) =>
  skills.map(
    (skill: SkillType): JSX.Element => (
      <Box key={skill.id} h="auto" w="30%" mb="1.5rem" p=".5rem" textAlign="center">
        <Flex alignItems="center" textAlign="center" justifyContent="center" h="3rem">
          <Image src={skill.img} width={'80'} height="60" />
        </Flex>
        <Text pt=".75rem" fontWeight="bold" fontSize="1.5rem">
          {skill.name}
        </Text>
      </Box>
    ),
  );
