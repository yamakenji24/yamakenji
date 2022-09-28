import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { Title } from 'ui/common/title';
import { EmptyLayout } from 'ui/common/emptyLayout';
import { ExperienceType } from 'services/get-experience-api';

export const Experience = ({
  experiences,
}: {
  experiences: Array<ExperienceType>;
}): JSX.Element => {
  const bg = useColorModeValue('teal.100', 'teal.600');

  return (
    <Flex direction="column">
      <Title title="Experience" fontSize="h4" />
      <Box
        bg={bg}
        position="relative"
        py="16px"
        pl="32px"
        _after={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: '6px',
          height: '100%',
          width: '4px',
          background: '#eaeaea',
          borderRadius: '2px',
        }}
      >
        {experiences == null ? <EmptyLayout /> : <ExperienceList experiences={experiences} />}
      </Box>
    </Flex>
  );
};

const ExperienceList = ({ experiences }: { experiences: Array<ExperienceType> }) => {
  const bg = useColorModeValue('teal.200', 'teal.400');

  return (
    <>
      {experiences.map((exp) => (
        <Box
          key={exp.id}
          position="relative"
          mb="32px"
          _after={{
            content: '""',
            position: 'absolute',
            top: 1,
            left: '-32px',
            height: '16px',
            width: '16px',
            background: 'blue.600',
            borderRadius: '50%',
            zIndex: 2,
          }}
        >
          <Text mb="16px">{exp.during}</Text>
          <Text fontWeight="bold" fontSize="1.5rem" mb="12px">
            {exp.title}
          </Text>
          <Text
            bg={bg}
            borderRadius="8px"
            p="16px"
            w="95%"
            boxShadow="0 1px 4px 1px rgba(0, 0, 0, 0.1)"
          >
            {exp.body}
          </Text>
        </Box>
      ))}
    </>
  );
};
