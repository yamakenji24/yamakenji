import React from 'react';
import { css } from '../../../styled-system/css';

export const Footer = () => {
  return (
    <footer
      className={css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '40px',
        background: '#222222',
        color: '#fff',
        fontSize: '14px',
      })}
    >
      © {new Date().getFullYear()} @yamakenji
    </footer>
  );
};
