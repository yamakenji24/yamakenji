'use client';

import dynamic from 'next/dynamic';
import { cloneElement } from 'react';
import { Title } from 'ui/common/title';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { css } from '../../../styled-system/css';

const GitHubCalendar = dynamic(() => import('react-github-calendar'));

export const GitHubActivity = () => (
  <div className={css({ padding: '0 24px' })}>
    <Title title="Days I Code" fontSize="h4" />
    <GitHubCalendar
      username="yamakenji24"
      blockSize={15}
      fontSize={16}
      colorScheme="light"
      renderBlock={(block, activity) =>
        cloneElement(block, {
          'data-tooltip-id': 'react-tooltip',
          'data-tooltip-html': `${activity.count} activities on ${activity.date}`,
        })
      }
    />
    <ReactTooltip id="react-tooltip" />
  </div>
);
