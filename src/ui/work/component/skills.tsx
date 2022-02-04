import { Box, Tag } from '@chakra-ui/react';

interface Props {
  skills: Array<{
    fieldId: string;
    skill: string;
  }>;
}

export const Skills = ({ skills }: Props): JSX.Element => (
  <Box pt={2}>
    {skills.map(({ skill }) => (
      <Tag key={skill} mx={1} size="sm" variant="outline" borderRadius="full" colorScheme="blue">
        {skill}
      </Tag>
    ))}
  </Box>
);
