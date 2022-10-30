'use client';
import dynamic from 'next/dynamic';
import ReactTooltip from 'react-tooltip';
const GitHubCalendar = dynamic(() => import('react-github-calendar'), { ssr: false });

export const MyGithubCalendar = () => (
  <div className="m-auto">
    <GitHubCalendar username="yamakenji24" blockSize={15} fontSize={16}>
      <ReactTooltip html />
    </GitHubCalendar>
  </div>
);
