'use client';

import { useState, useEffect, ReactNode } from 'react';
import { IntroEffect } from './IntroEffect';
import { css } from '../../../styled-system/css';

export function PageWrapper({ children }: { children: ReactNode }) {
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    // エフェクトが完了するまでコンテンツを非表示
  }, []);

  const handleEffectComplete = () => {
    setContentVisible(true);
  };

  return (
    <>
      <IntroEffect onEffectComplete={handleEffectComplete} />
      <div className={contentVisible ? contentVisibleStyle : contentHiddenStyle}>{children}</div>
    </>
  );
}

const contentHiddenStyle = css({
  opacity: 0,
  visibility: 'hidden',
});

const contentVisibleStyle = css({
  opacity: 1,
  visibility: 'visible',
  animation: 'fadeIn 0.5s ease-out',
});
