import { Skills } from './skills';
import { WorkItem } from 'builder/works';
import Link from 'next/link';
import Image from 'next/image';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

import { css } from '../../../../styled-system/css';

export const Work = ({ skills, url, body, ogImageURL, title, github }: WorkItem) => {
  return (
    <article className={workCard}>
      <div className={imageWrapper}>
        <Image
          src={ogImageURL}
          width={400}
          height={240}
          alt={title}
          className={workImage}
          priority={false}
        />
        <div className={imageOverlay}>
          <div className={actionButtons}>
            <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={actionButton}
              aria-label={`Visit ${title}`}
            >
              <FiExternalLink size={20} />
            </Link>
            {github && (
              <Link
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className={actionButton}
                aria-label={`View ${title} source code`}
              >
                <FiGithub size={20} />
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className={contentWrapper}>
        <div className={cardHeader}>
          <h3 className={workTitle}>{title}</h3>
          <Skills skills={skills} />
        </div>

        <p className={workDescription}>{body}</p>

        <div className={cardFooter}>
          <Link href={url} target="_blank" rel="noopener noreferrer" className={primaryButton}>
            View Project
            <FiExternalLink size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
};

const workCard = css({
  background: 'white',
  borderRadius: '20px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  border: '1px solid rgba(102, 126, 234, 0.1)',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  _hover: {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
    borderColor: 'rgba(102, 126, 234, 0.3)',
    '& > div:first-child > div:last-child': {
      opacity: 1,
    },
  },
});

const imageWrapper = css({
  position: 'relative',
  overflow: 'hidden',
  height: '200px',
  background: 'linear-gradient(45deg, #f1f5f9, #e2e8f0)',
});

const workImage = css({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.3s ease',
});

const imageOverlay = css({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.8))',
  opacity: 0,
  transition: 'opacity 0.3s ease',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const actionButtons = css({
  display: 'flex',
  gap: '12px',
});

const actionButton = css({
  background: 'rgba(255, 255, 255, 0.2)',
  border: '2px solid rgba(255, 255, 255, 0.3)',
  borderRadius: 'full',
  padding: '12px',
  color: 'white',
  textDecoration: 'none',
  backdropFilter: 'blur(10px)',
  transition: 'all 0.3s ease',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  _hover: {
    background: 'rgba(255, 255, 255, 0.3)',
    borderColor: 'rgba(255, 255, 255, 0.6)',
    transform: 'scale(1.1)',
  },
});

const contentWrapper = css({
  padding: '24px',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

const cardHeader = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

const workTitle = css({
  fontSize: { base: '1.2rem', md: '1.3rem' },
  fontWeight: 'bold',
  color: 'gray.900',
  lineHeight: '1.3',
  margin: '0',
});

const workDescription = css({
  fontSize: { base: '0.95rem', md: '1rem' },
  color: 'gray.600',
  lineHeight: '1.6',
  flex: 1,
  margin: '0',
});

const cardFooter = css({
  marginTop: 'auto',
  paddingTop: '16px',
});

const primaryButton = css({
  background: 'linear-gradient(135deg, #667eea, #764ba2)',
  color: 'white',
  textDecoration: 'none',
  padding: '12px 20px',
  borderRadius: '12px',
  fontWeight: '600',
  fontSize: '0.9rem',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
  _hover: {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(102, 126, 234, 0.4)',
  },
});
