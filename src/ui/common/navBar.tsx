import { Text, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

interface Props {
  url: string;
  title: string;
}

const NavItem = ({ url, title }: Props) => (
  <Text pr={[4, 8]} color="white">
    <NextLink href={url} legacyBehavior>
      <Link
        position="relative"
        transition="all 0.3s ease-in-out"
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
        data-test-id={`navigation-${title}`}
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
    </>
  );
};
