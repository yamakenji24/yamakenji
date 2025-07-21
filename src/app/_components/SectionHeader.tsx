
'use client';

import { ReactNode } from 'react';
import { UnifiedBackground } from './UnifiedEffects';
import { css } from '../../../styled-system/css';

interface SectionHeaderProps {
  children: ReactNode;
  variant?: 'minimal' | 'normal' | 'dense';
  colorScheme?: 'blue' | 'purple' | 'green' | 'orange' | 'cyan';
  height?: 'small' | 'medium' | 'large';
}

export function SectionHeader({ 
  children, 
  variant = 'minimal',
  colorScheme = 'blue',
  height = 'medium'
}: SectionHeaderProps) {
  const heightMap = {
    small: '200px',
    medium: '300px',
    large: '400px'
  };

  const containerStyle = css({
    height: heightMap[height],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
  });

  const contentStyle = css({
    textAlign: 'center',
    color: 'white',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
  });

  return (
    <div className={containerStyle}>
      <div style={{ 
        position: 'absolute', 
        width: '100%', 
        height: '100%', 
        opacity: 0.8, 
        pointerEvents: 'none'
      }}>
        <UnifiedBackground type="section" variant={variant} colorScheme={colorScheme} />
      </div>
      <div className={contentStyle}>
        {children}
      </div>
    </div>
  );
}