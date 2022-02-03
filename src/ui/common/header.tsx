import { Flex } from '@chakra-ui/react';
import Image from 'next/image';
import { NavBar } from './navBar';

export const Header = (): JSX.Element => {
  return (
    <Flex w="100%" as="nav" px={['4', '8']} py={['4', '2']} bg="#222222" overflow={'auto'}>
      <Logo />
      <Flex width="full" align="center">
        <NavBar />
      </Flex>
    </Flex>
  );
};

const Logo = (): JSX.Element => (
  <Flex pl={['2', '4']} pr={['4', '8']}>
    <Image src="/logo.png" width="80" height="60" />
  </Flex>
);
