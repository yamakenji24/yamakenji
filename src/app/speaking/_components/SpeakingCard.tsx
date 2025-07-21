import {
  FiCalendar,
  FiMapPin,
  FiClock,
  FiUsers,
  FiExternalLink,
  FiVideo,
  FiFileText,
  FiGithub,
  FiEdit,
} from 'react-icons/fi';
import type { SpeakingItem } from '../../../../data/speakingData';
import { css } from '../../../../styled-system/css';

interface SpeakingCardProps {
  speaking: SpeakingItem;
}

const getCategoryColor = (category: SpeakingItem['category']) => {
  switch (category) {
    case 'Tech':
      return '#667eea';
    case 'LT':
      return '#55C500';
    case 'Workshop':
      return '#FF6B6B';
    case 'Keynote':
      return '#4ECDC4';
    case 'Panel':
      return '#FFE66D';
    default:
      return '#667eea';
  }
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const SpeakingCard = ({ speaking }: SpeakingCardProps) => {
  const categoryColor = getCategoryColor(speaking.category);

  return (
    <div className={cardContainer}>
      <div className={cardHeader}>
        {speaking.thumbnail ? (
          <img src={speaking.thumbnail} alt={speaking.title} className={thumbnailImage} />
        ) : (
          <div
            className={defaultThumbnail}
            style={{ background: `linear-gradient(135deg, ${categoryColor}, ${categoryColor}aa)` }}
          >
            <span className={categoryBadge}>{speaking.category}</span>
          </div>
        )}
      </div>

      <div className={cardContent}>
        <h3 className={title}>{speaking.title}</h3>

        <div className={eventInfo}>
          <h4 className={eventName}>{speaking.event}</h4>
          <div className={metaRow}>
            <div className={metaItem}>
              <FiCalendar size={14} />
              <span>{formatDate(speaking.date)}</span>
            </div>
            <div className={metaItem}>
              <FiMapPin size={14} />
              <span>{speaking.location}</span>
            </div>
          </div>

          <div className={metaRow}>
            {speaking.duration && (
              <div className={metaItem}>
                <FiClock size={14} />
                <span>{speaking.duration}</span>
              </div>
            )}
            {speaking.audience && (
              <div className={metaItem}>
                <FiUsers size={14} />
                <span>{speaking.audience}人</span>
              </div>
            )}
            <div className={languageBadge}>
              {speaking.language === 'ja' ? '🇯🇵 日本語' : '🇺🇸 English'}
            </div>
          </div>
        </div>

        <p className={description}>{speaking.description}</p>

        <div className={tagsContainer}>
          {speaking.tags.map((tag) => (
            <span key={tag} className={tag_}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className={cardActions}>
        {speaking.links.slides && (
          <a
            href={speaking.links.slides}
            target="_blank"
            rel="noopener noreferrer"
            className={actionButton}
          >
            <FiFileText size={16} />
            <span>Slides</span>
          </a>
        )}
        {speaking.links.video && (
          <a
            href={speaking.links.video}
            target="_blank"
            rel="noopener noreferrer"
            className={actionButton}
          >
            <FiVideo size={16} />
            <span>Video</span>
          </a>
        )}
        {speaking.links.repository && (
          <a
            href={speaking.links.repository}
            target="_blank"
            rel="noopener noreferrer"
            className={actionButton}
          >
            <FiGithub size={16} />
            <span>Code</span>
          </a>
        )}
        {speaking.links.blogPost && (
          <a
            href={speaking.links.blogPost}
            target="_blank"
            rel="noopener noreferrer"
            className={actionButton}
          >
            <FiEdit size={16} />
            <span>Blog</span>
          </a>
        )}
        {speaking.links.eventPage && (
          <a
            href={speaking.links.eventPage}
            target="_blank"
            rel="noopener noreferrer"
            className={actionButton}
          >
            <FiExternalLink size={16} />
            <span>Event</span>
          </a>
        )}
      </div>
    </div>
  );
};

const cardContainer = css({
  background: 'white',
  borderRadius: '20px',
  overflow: 'hidden',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  border: '1px solid rgba(102, 126, 234, 0.1)',
  transition: 'all 0.3s ease',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  _hover: {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
    borderColor: 'rgba(102, 126, 234, 0.2)',
  },
});

const cardHeader = css({
  position: 'relative',
  height: '180px',
  overflow: 'hidden',
});

const thumbnailImage = css({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const defaultThumbnail = css({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  position: 'relative',
});

const categoryBadge = css({
  background: 'rgba(255, 255, 255, 0.2)',
  backdropFilter: 'blur(10px)',
  padding: '8px 16px',
  borderRadius: '20px',
  fontSize: '0.9rem',
  fontWeight: '600',
  border: '1px solid rgba(255, 255, 255, 0.3)',
});

const cardContent = css({
  padding: '24px',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

const title = css({
  fontSize: { base: '1.1rem', md: '1.2rem' },
  fontWeight: 'bold',
  color: 'gray.800',
  lineHeight: '1.4',
  marginBottom: '0',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  minHeight: '2.8em',
});

const eventInfo = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

const eventName = css({
  fontSize: '1rem',
  fontWeight: '600',
  color: '#667eea',
  marginBottom: '0',
});

const metaRow = css({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  flexWrap: 'wrap',
});

const metaItem = css({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  fontSize: '0.85rem',
  color: 'gray.600',
  fontWeight: '500',
});

const languageBadge = css({
  fontSize: '0.8rem',
  padding: '4px 8px',
  background: 'rgba(102, 126, 234, 0.1)',
  borderRadius: '12px',
  color: '#667eea',
  fontWeight: '500',
});

const description = css({
  fontSize: '0.9rem',
  color: 'gray.600',
  lineHeight: '1.6',
  display: '-webkit-box',
  WebkitLineClamp: 3,
  overflow: 'hidden',
  flex: 1,
});

const tagsContainer = css({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
  marginTop: 'auto',
});

const tag_ = css({
  fontSize: '0.75rem',
  padding: '4px 8px',
  background: 'rgba(102, 126, 234, 0.1)',
  borderRadius: '8px',
  color: '#667eea',
  fontWeight: '500',
});

const cardActions = css({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
  padding: '16px 24px 24px',
  borderTop: '1px solid rgba(102, 126, 234, 0.1)',
});

const actionButton = css({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  padding: '8px 12px',
  borderRadius: '8px',
  fontSize: '0.85rem',
  fontWeight: '500',
  textDecoration: 'none',
  color: '#667eea',
  background: 'rgba(102, 126, 234, 0.1)',
  border: '1px solid rgba(102, 126, 234, 0.2)',
  transition: 'all 0.2s ease',
  _hover: {
    background: '#667eea',
    color: 'white',
    transform: 'translateY(-1px)',
    boxShadow: '0 2px 8px rgba(102, 126, 234, 0.3)',
  },
});
