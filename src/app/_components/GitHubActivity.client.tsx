'use client';

import dynamic from 'next/dynamic';
import { cloneElement } from 'react';
import { Title } from 'ui/common/title';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { css } from '../../../styled-system/css';

const GitHubCalendar = dynamic(() => import('react-github-calendar'));

export const GitHubActivity = () => (
  <div className={sectionContainer}>
    <div className={contentWrapper}>
      <Title title="Days I Code" fontSize="h4" />
      <div className={calendarWrapper}>
        <div className={calendarCard}>
          <GitHubCalendar
            username="yamakenji24"
            blockSize={15}
            fontSize={16}
            colorScheme="light"
            theme={{
              light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
              dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
            }}
            renderBlock={(block, activity) =>
              cloneElement(block, {
                'data-tooltip-id': 'react-tooltip',
                'data-tooltip-html': `${activity.count} activities on ${activity.date}`,
                style: {
                  ...block.props.style,
                  borderRadius: '3px',
                },
              })
            }
          />
          <ReactTooltip
            id="react-tooltip"
            style={{
              backgroundColor: '#667eea',
              color: 'white',
              borderRadius: '8px',
              padding: '8px 12px',
              fontSize: '0.9rem',
            }}
          />
        </div>
      </div>
    </div>
  </div>
);

const sectionContainer = css({
  maxWidth: '1200px',
  margin: '0 auto',
});

const contentWrapper = css({
  padding: { base: '0 20px', md: '0 40px' },
});

const calendarWrapper = css({
  marginTop: '48px',
});

const calendarCard = css({
  background: 'white',
  borderRadius: '20px',
  padding: { base: '24px', md: '32px' },
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  border: '1px solid rgba(102, 126, 234, 0.1)',
  marginBottom: '32px',
  overflow: 'auto',
  animation: 'fadeInUp 0.8s ease-out',
  '& .react-activity-calendar': {
    margin: '0 auto',
    maxWidth: '100%',
  },
  '& .react-activity-calendar__calendar': {
    overflow: 'auto',
  },
});
