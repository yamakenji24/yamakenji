import { Avatar, Flex, Text, Box, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import Image from 'next/image';
import { services, Services } from 'ui/top';

export const Profile = (): JSX.Element => {
  return (
    <Box>
      <Flex
        direction={['column', 'row']}
        alignItems="center"
        mt="24"
        mb="8"
        justifyContent="center"
      >
        <Avatar h="160px" w="160px" src="/me.png"/>
        <Box textAlign={['center', 'left']} pl={['0', '24']} pt={['2rem', 0]}>
          <Text fontSize="2rem" fontWeight="normal" lineHeight="40px" letterSpacing="wider">
            Kenji Yamashita
          </Text>
          <Box fontSize="1rem" lineHeight="1.5rem">
            <Text>@yamakenji24</Text>
            <Text>Software Enginner</Text>
          </Box>
        </Box>
      </Flex>
      <Flex wrap="wrap" mt="1rem" justifyContent="center">
        <ServicesList services={services} />
      </Flex>
    </Box>
  );
};

const ServicesList = ({ services }: { services: Array<Services> }): JSX.Element => (
  <>
    {services.map((service: Services, idx: number) => (
      <Box key={idx} mx="2" w="auto">
        <NextLink href={service.url} legacyBehavior>
          <Link href={service.url}>
            <Image alt="" src={service.service} width="32" height="32" />
          </Link>
        </NextLink>
      </Box>
    ))}
  </>
);
