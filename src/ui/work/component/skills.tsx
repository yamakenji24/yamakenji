import { Box, Tag } from '@chakra-ui/react';

interface Props {
  skills: Array<{
    fieldId: string;
    skill: string;
  }>;
}

export const Skills = ({ skills }: Props): JSX.Element => (
  <Box m="4px">
    {skills.map(({ skill }) => (
      <Tag key={skill} size="sm" variant="outline" borderRadius="full" colorScheme="blue">
        {skill}
      </Tag>
    ))}
  </Box>
);
