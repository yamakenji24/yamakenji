import NextLink from 'next/link';
import Image from 'next/image';
import { css } from '../../../styled-system/css';

export const Profile = (): JSX.Element => {
  return (
    <div>
      <div
        className={css({
          display: 'flex',
          flexDirection: { base: 'column', md: 'row' },
          alignItems: 'center',
          mt: '64px',
          mb: '32px',
          justifyContent: 'center',
        })}
      >
        <span>
          <Image alt="" src='/me.png' width="160" height="160"/>
        </span>
        <div
          className={css({
            textAlign: { base: 'center', md: 'left' },
            pl: { base: '0', md: '24px' },
            pt: { base: '16px', md: '0' },
          })}
        >
          <p
            className={css({
              fontSize: '2rem',
              fontWeight: 'normal',
              lineHeight: '40px',
              letterSpacing: 'wider',
            })}
          >
            Kenji Yamashita
          </p>
          <div className={css({ fontSize: '1rem', lineHeight: '1.5rem' })}>
            <p>@yamakenji24</p>
            <p>Software Enginner</p>
          </div>
        </div>
      </div>
      <div className={socialServiceWrapper}>
        <SocialService icon="/github.svg" url="https://github.com/yamakenji24" />
        <SocialService icon="/hatenablog.svg" url="https://yamakenji24.hatenablog.com/" />
        <SocialService icon="/qiita.png" url="https://qiita.com/yamakenji" />
        <SocialService icon="/zenn.svg" url="https://zenn.dev/yamakenji24" />
      </div>
    </div>
  );
};

const SocialService = ({ icon, url }: { icon: string; url: string }) => (
  <div className={css({ margin: '0 8px', width: 'auto' })}>
    <NextLink href={url}>
      <Image alt="" src={icon} width="32" height="32" />
    </NextLink>
  </div>
);

const socialServiceWrapper = css({
  display: 'flex',
  flexWrap: 'wrap',
  mt: '8px',
  justifyContent: 'center',
});
