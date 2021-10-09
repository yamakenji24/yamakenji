import { Text, Link, Icon } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FaGithub } from 'react-icons/fa';

const NavItem = ({ url, title }) => (
  <Text mr={8} color="white">
    <NextLink href={url}>
      <Link
        position="relative"
        transition="all 0.3s ease-in-out"
        h="100%"
        color="inherit"
        fontWeight="bold"
        _after={{
          bg: 'blue.600',
          transition: 'transform 0.3s ease-in-out',
          transform: 'scale(0, 1)',
          transformOrigin: 'center top',
        }}
        _hover={{
          color: 'blue.500',
          textDecoration: 'none',
        }}
      >
        {title}
      </Link>
    </NextLink>
  </Text>
);

export const NavBar = (): JSX.Element => {
  return (
    <>
      <NavItem url="/" title="Top" />
      <NavItem url="/work" title="Work" />
      <NavItem url="/article" title="Article" />
      <NavItem url="/contact" title="Contact" />

      <NextLink href="https://github.com/yamakenji24">
        <Link>
          <Icon as={FaGithub} color="white" boxSize="2em" />
        </Link>
      </NextLink>
    </>
  );
};
