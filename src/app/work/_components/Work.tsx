import { Skills } from './skills';
import { WorkItem } from 'builder/works';
import Link from 'next/link';
import Image from 'next/image';

import { css } from '../../../../styled-system/css';

export const Work = ({ skills, url, body, ogImageURL, title }: WorkItem) => {
  return (
    <div className={css({ px: '16px', maxW: { base: 'md', md: 'sm' } })}>
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={css({ _hover: { textDecoration: 'none' } })}
      >
        <div
          className={css({
            border: '1px solid',
            borderRadius: 'xl',
            borderColor: 'gray.400',
            _hover: { bg: 'gray.200' },
            h: '100%',
            display: 'flex',
            flexDirection: 'column',
          })}
        >
          <Image
            src={ogImageURL}
            width={450}
            height={220}
            alt={title}
            className={css({ borderTopRadius: 'xl'})}
            priority={false}
          />
          <div
            className={css({
              borderBottomRadius: 'xl',
              borderTop: '1px solid',
              borderColor: 'gray.400',
              p: '8px',
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              justifyContent: 'flex-end',
            })}
          >
            <p className={css({ fontWeight: 'bold' })}>{title}</p>
            <p>{body}</p>
            <Skills skills={skills} /> {/* Moved the Skills component here */}
          </div>
        </div>
      </Link>
    </div>
  );
};
