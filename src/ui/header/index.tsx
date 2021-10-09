import { Flex } from '@chakra-ui/react';
import Image from 'next/image';
import { NavBar } from 'ui/header/nav';

export const Header = (): JSX.Element => {
  return (
    <Flex
      as="nav"
      px="4"
      py="2"
      justify="space-between"
      align="center"
      bg="#222222"
      boxShadow="0 4px 20px 0 rgba(0, 0, 0, 0.1), 0 7px 10px -5px rgba(0, 0, 0, 0.2)"
    >
      <Logo />
      <Flex width="full" align="center" flexGrow={1} justifyContent="flex-end">
        <NavBar />
      </Flex>
    </Flex>
  );
};

const Logo = (): JSX.Element => (
  <Flex ml={4} mr={8}>
    <Image src="/logo.png" width="60" height="50" />
  </Flex>
);
