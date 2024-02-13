'use client';

import Image from 'next/image';
import { useMemo } from 'react';
import { css } from '../../../../styled-system/css';

interface Props {
  url: string;
  image: string;
  title: string;
  siteName: string;
  isoDate: string;
}

export const Article = ({ url, image, title, siteName, isoDate }: Props) => {
  const date = useMemo(() => new Date(isoDate).toLocaleDateString(), [isoDate]);

  return (
    <div className={css({ maxW: { base: 'md', md: 'auto' }, mx: '16px' })}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div
          className={css({
            borderRadius: 'xl',
            border: '1px solid',
            _hover: { bg: 'gray.200' },
            h: '100%',
            display: 'flex',
            flexDirection: 'column',
          })}
        >
          <Image
            src={image}
            alt={title}
            width="450"
            height="250"
            className={css({ borderTopRadius: 'xl' })}
          />
          <p className={css({ mx: '16px', my: '8px' })}>{title}</p>
          <div className={css({
            display: 'flex',
            justifyContent: 'space-between',
            mx: '16px',
            my: '8px',
            marginTop: 'auto',
          })}>
            <p>{siteName}</p>
            <time>{date}</time>
          </div>
        </div>
      </a>
    </div>
  );
};
