import NextLink from 'next/link';
import { css } from '../../../styled-system/css';

interface Props {
  url: string;
  title: string;
}

const NavItem = ({ url, title }: Props) => (
  <p
    className={css({
      color: { base: 'white', _hover: 'blue.500' },
      fontWeight: 'bold',
      paddingRight: { base: '16px', md: '32px' },
    })}
  >
    <NextLink href={url} data-test-id={`navigation-${title}`}>
      {title}
    </NextLink>
  </p>
);

export const NavBar = (): JSX.Element => {
  return (
    <div className={css({ display: 'flex', alignItems: 'center' })}>
      <NavItem url="/" title="Top" />
      <NavItem url="/work" title="Work" />
      <NavItem url="/article" title="Article" />
      <NavItem url="/speaking" title="Speaking" />
    </div>
  );
};
