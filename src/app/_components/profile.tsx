import NextLink from 'next/link';
import Image from 'next/image';
import { css } from '../../../styled-system/css';

export const Profile = (): JSX.Element => {
  return (
    <div className={heroContainer}>
      <div className={profileHeader}>
        <div className={profileImageWrapper}>
          <Image
            alt="Kenji Yamashita profile picture"
            src="/me.png"
            width="120"
            height="120"
            className={profileImage}
          />
        </div>

        <div className={profileInfo}>
          <h1 className={name}>Kenji Yamashita</h1>
          <p className={handle}>@yamakenji24</p>
        </div>
      </div>

      <div className={profileDetails}>
        <p className={title}>Software Engineer</p>
      </div>

      <div className={socialServiceWrapper}>
        <SocialService icon="/github.svg" url="https://github.com/yamakenji24" label="GitHub" />
        <SocialService
          icon="/hatenablog.svg"
          url="https://yamakenji24.hatenablog.com/"
          label="Hatena Blog"
        />
        <SocialService icon="/qiita.png" url="https://qiita.com/yamakenji" label="Qiita" />
        <SocialService icon="/zenn.svg" url="https://zenn.dev/yamakenji24" label="Zenn" />
      </div>
    </div>
  );
};

const SocialService = ({ icon, url, label }: { icon: string; url: string; label: string }) => (
  <div className={socialLink}>
    <NextLink href={url} className={linkWrapper}>
      <Image alt={`${label} profile`} src={icon} width="40" height="40" />
      <span className={linkLabel}>{label}</span>
    </NextLink>
  </div>
);

const heroContainer = css({
  textAlign: 'center',
  maxWidth: '800px',
  margin: '0 auto',
  color: 'white',
  animation: 'fadeIn 1s ease-out',
});

const profileHeader = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: { base: '20px', md: '32px' },
  marginBottom: '32px',
  flexDirection: { base: 'column', sm: 'row' },
});

const profileImageWrapper = css({
  flexShrink: 0,
});

const profileImage = css({
  borderRadius: 'full',
  border: '4px solid rgba(255, 255, 255, 0.3)',
  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  _hover: {
    transform: 'scale(1.05)',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
  },
});

const profileInfo = css({
  textAlign: { base: 'center', sm: 'left' },
  flex: 1,
});

const name = css({
  fontSize: { base: '2.5rem', md: '3.5rem' },
  fontWeight: 'bold',
  marginBottom: '8px',
  background: 'linear-gradient(45deg, #ffffff, #e0e7ff)',
  backgroundClip: 'text',
  color: 'transparent',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
  lineHeight: '1.1',
});

const handle = css({
  fontSize: { base: '1.1rem', md: '1.3rem' },
  color: 'rgba(255, 255, 255, 0.8)',
  marginBottom: '0',
  fontWeight: '500',
});

const profileDetails = css({
  textAlign: 'center',
  marginBottom: '48px',
});

const title = css({
  fontSize: { base: '1.4rem', md: '1.6rem' },
  color: 'rgba(255, 255, 255, 0.9)',
  marginBottom: '16px',
  fontWeight: '600',
});

const socialServiceWrapper = css({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '24px',
});

const socialLink = css({
  transition: 'transform 0.3s ease',
  _hover: {
    transform: 'translateY(-4px)',
  },
});

const linkWrapper = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textDecoration: 'none',
  color: 'white',
  background: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '16px',
  padding: '16px',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  backdropFilter: 'blur(10px)',
  transition: 'all 0.3s ease',
  _hover: {
    background: 'rgba(255, 255, 255, 0.2)',
    borderColor: 'rgba(255, 255, 255, 0.4)',
  },
});

const linkLabel = css({
  marginTop: '8px',
  fontSize: '0.9rem',
  fontWeight: '500',
});
