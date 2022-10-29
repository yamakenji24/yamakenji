import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';
import { Title } from 'ui/common/title';
import type { SkillType } from 'services/get-skill-api';

export const Skills = ({ skills }: { skills: Array<SkillType> }): JSX.Element => {
  return (
    <Flex direction="column">
      <Title title="Skillset" fontSize="h4" />
      <Flex wrap="wrap" justifyContent="center">
        {skills.length &&
          skills.map((skill) => (
            <Box key={skill.id} h="auto" w="auto" mb="8" px="4" textAlign="center" bg="white">
              <Flex alignItems="center" justifyContent="center">
                <Box w="20" h="20" pos="relative">
                  <Image src={skill.img} width={100} height={100} alt="" />
                </Box>
              </Flex>
            </Box>
          ))}
      </Flex>
      <Title title="Days I Code" fontSize="h4" />
      <Box m="auto">
        {/* Todo: Fix hydration error */}
        <GitHubCalendar username="yamakenji24" blockSize={15} fontSize={16}>
          <ReactTooltip html />
        </GitHubCalendar>
      </Box>
    </Flex>
  );
};
