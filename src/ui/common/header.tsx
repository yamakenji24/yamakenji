import { Flex, IconButton, useColorMode } from '@chakra-ui/react';
import Image from 'next/image';
import { NavBar } from './navBar';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export const Header = (): JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex w="100%" as="nav" px={['4', '8']} py={['4', '2']} bg="#222222" overflow={'auto'}>
      <Logo />
      <Flex width="full" align="center">
        <NavBar />
      </Flex>
      <IconButton
        size='sm'
        my="auto"
        _focus={{_focus: "none"}}
        aria-label="DarkMode Switch"
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
      />
    </Flex>
  );
};

const Logo = (): JSX.Element => (
  <Flex pl={['2', '4']} pr={['4', '8']}>
    <Image src="/logo.png" width="80" height="60" />
  </Flex>
);
