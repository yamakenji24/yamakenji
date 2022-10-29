import { Flex, IconButton, useColorMode } from '@chakra-ui/react';
import Image from "next/legacy/image";
import { NavBar } from './navBar';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export const Header = (): JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex as="nav" px={4} py={2} bg="#222222" justifyContent={'space-between'}>
      <Logo />
      <Flex align="center">
        <NavBar />
        <IconButton
          size="sm"
          my="auto"
          aria-label="DarkMode Switch"
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
        />
      </Flex>
    </Flex>
  );
};

const Logo = (): JSX.Element => (
  <Flex pl={['2', '4']} pr={['4', '8']}>
    <Image src="/logo.png" width="80" height="60" alt="" />
  </Flex>
);
