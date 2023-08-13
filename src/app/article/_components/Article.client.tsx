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
    <div className={css({ maxW: { base: 'md', md: 'auto' }, px: '16px' })}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div
          className={css({
            borderRadius: 'xl',
            border: '1px solid',
            _hover: { bg: 'gray.200' },
          })}
        >
          <Image
            src={image}
            alt={title}
            width="450"
            height="250"
            className={css({ borderTopRadius: 'xl' })}
          />
          <div className={css({ p: '16px' })}>
            <p>{title}</p>
            <div
              className={css({
                display: 'flex',
                justifyContent: 'space-between',
              })}
            >
              <p>{siteName}</p>
              <time>{date}</time>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
