'use client';

import dynamic from 'next/dynamic';
import { Title } from 'ui/common/title';
import { css } from '../../../styled-system/css';

const GitHubCalendar = dynamic(() => import('react-github-calendar'));

export const GitHubActivity = () => (
  <div className={css({ padding: '0 24px' })}>
    <Title title="Days I Code" fontSize="h4" />
    <GitHubCalendar username="yamakenji24" blockSize={15} fontSize={16} colorScheme='light'/>
  </div>
);
