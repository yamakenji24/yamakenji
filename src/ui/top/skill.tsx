import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { EmptyLayout } from 'ui/common/emptyLayout';
import { Title } from 'ui/common/title';
import type { SkillType } from 'services/get-skill-api';

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
      <Box key={skill.id} h="auto" w="auto" mb="8" px="4" textAlign="center">
        <Flex alignItems="center" justifyContent="center" >
          <Image src={skill.img} width='60' height="45" />
        </Flex>
        <Text pt="2" fontWeight="bold" fontSize="20">
          {skill.name}
        </Text>
      </Box>
    ),
  );
