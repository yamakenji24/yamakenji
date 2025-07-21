'use client';

import Image from 'next/image';
import { useMemo } from 'react';
import { FiExternalLink, FiCalendar } from 'react-icons/fi';
import { css } from '../../../../styled-system/css';

interface Props {
  url: string;
  image: string;
  title: string;
  siteName: string;
  isoDate: string;
}

const getSiteColor = (siteName: string) => {
  switch (siteName) {
    case 'Zenn':
      return '#3EA8FF';
    case 'Qiita':
      return '#55C500';
    case 'Hatena Blog':
      return '#00A4DE';
    case 'My Blog':
      return '#667eea';
    default:
      return '#6B7280';
  }
};

export const Article = ({ url, image, title, siteName, isoDate }: Props) => {
  const date = useMemo(() => new Date(isoDate).toLocaleDateString('ja-JP'), [isoDate]);
  const siteColor = getSiteColor(siteName);

  return (
    <article className={articleCard}>
      <a href={url} target="_blank" rel="noopener noreferrer" className={articleLink}>
        <div className={imageWrapper}>
          <Image src={image} alt={title} width={400} height={240} className={articleImage} />
          <div className={imageOverlay}>
            <div className={readButton}>
              <span>Read Article</span>
              <FiExternalLink size={16} />
            </div>
          </div>
        </div>

        <div className={contentWrapper}>
          <div className={articleHeader}>
            <div className={siteBadge} style={{ backgroundColor: siteColor }}>
              {siteName}
            </div>
            <div className={dateWrapper}>
              <FiCalendar size={14} />
              <time className={dateText}>{date}</time>
            </div>
          </div>

          <h3 className={articleTitle}>
            {title}
          </h3>

          <div className={articleFooter}>
            <span className={readMoreText}>
              続きを読む <FiExternalLink size={14} />
            </span>
          </div>
        </div>
      </a>
    </article>
  );
};

const articleCard = css({
  background: 'white',
  borderRadius: '20px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  border: '1px solid rgba(102, 126, 234, 0.1)',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  height: '100%',
  minHeight: '420px', // カード全体の最小高さを設定
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  _hover: {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
    borderColor: 'rgba(102, 126, 234, 0.3)',
    '& > a > div:first-child > div:last-child': {
      opacity: 1,
    },
  },
});

const articleLink = css({
  textDecoration: 'none',
  color: 'inherit',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
});

const imageWrapper = css({
  position: 'relative',
  overflow: 'hidden',
  height: '200px',
  background: 'linear-gradient(45deg, #f1f5f9, #e2e8f0)',
  flexShrink: 0, // 画像部分の高さを固定
});

const articleImage = css({
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

const readButton = css({
  background: 'rgba(255, 255, 255, 0.2)',
  border: '2px solid rgba(255, 255, 255, 0.3)',
  borderRadius: '12px',
  padding: '12px 20px',
  color: 'white',
  fontWeight: '600',
  backdropFilter: 'blur(10px)',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  transition: 'all 0.3s ease',
  _hover: {
    background: 'rgba(255, 255, 255, 0.3)',
    borderColor: 'rgba(255, 255, 255, 0.6)',
    transform: 'scale(1.05)',
  },
});

const contentWrapper = css({
  padding: '20px',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  minHeight: '180px', // コンテンツ部分の最小高さを設定
});

const articleHeader = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '8px',
  minHeight: '32px', // ヘッダー部分の固定高さ
  flexShrink: 0,
});

const siteBadge = css({
  color: 'white',
  padding: '4px 12px',
  borderRadius: '20px',
  fontSize: '0.8rem',
  fontWeight: '600',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
});

const dateWrapper = css({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  color: 'gray.500',
});

const dateText = css({
  fontSize: '0.85rem',
  color: 'gray.500',
});

const articleTitle = css({
  fontSize: { base: '1.1rem', md: '1.2rem' },
  fontWeight: 'bold',
  color: 'gray.900',
  lineHeight: '1.4',
  margin: '0',
  height: '4.2em', // 固定高さ（約3行分）
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  wordBreak: 'break-word',
  flexShrink: 0, // 高さを固定
});

const articleFooter = css({
  marginTop: 'auto',
  paddingTop: '12px',
  minHeight: '40px', // フッター部分の固定高さ
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
});

const readMoreText = css({
  color: '#667eea',
  fontSize: '0.9rem',
  fontWeight: '500',
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  transition: 'color 0.3s ease',
  _hover: {
    color: '#5a67d8',
  },
});
