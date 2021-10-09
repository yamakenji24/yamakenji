import { Box, Flex, Text } from '@chakra-ui/react';
import { Title } from 'ui/title';
import { EmptyLayout } from 'ui/emptyLayout';

export const Experience = ({ experiences }): JSX.Element => {
  return (
    <Flex direction="column">
      <Title title="Experience" fontSize="h4" />
      <Box
        bg="#CBFFD3"
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

const ExperienceList = ({ experiences }) =>
  experiences.map((exp) => (
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
        bg="#CCFFFF"
        borderRadius="8px"
        p="16px"
        w="95%"
        boxShadow="0 1px 4px 1px rgba(0, 0, 0, 0.1)"
      >
        {exp.body}
      </Text>
    </Box>
  ));
