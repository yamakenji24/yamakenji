import Image from 'next/legacy/image';
import { NavBar } from './navBar';
import { css } from '../../../styled-system/css';

export const Header = (): JSX.Element => {
  return (
    <nav
      className={css({
        display: 'flex',
        padding: '4px 16px',
        bg: '#222222',
        justifyContent: 'space-between',
      })}
    >
      <Logo />
      <NavBar />
    </nav>
  );
};

const Logo = (): JSX.Element => (
  <div className={css({ display: 'flex' })}>
    <Image src="/logo.png" width="80" height="60" alt="" />
  </div>
);
