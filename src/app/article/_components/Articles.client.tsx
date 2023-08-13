'use client';

import { useEffect, useState } from 'react';
import type { PostItem } from 'builder/posts';
import type { SiteName } from './SiteTabs';
import { SiteTabs } from './SiteTabs';
import { getSitedPosts } from './useArticle';
import { Article } from './Article.client';
import { css } from '../../../../styled-system/css';

export const ArticleContainer = () => {
  const [siteName, setSiteName] = useState<SiteName>('All');

  const handleChangeSiteName = (newSiteName: SiteName) => setSiteName(newSiteName);

  return (
    <div className={css({ w: '100%' })}>
      <SiteTabs handleChangeSiteName={handleChangeSiteName} />
      <Articles siteName={siteName} />
    </div>
  );
};

const Articles = ({ siteName }: { siteName: SiteName }) => {
  const [posts, setPosts] = useState<PostItem[]>([]);
  useEffect(() => {
    const newPosts = getSitedPosts(siteName);
    setPosts(newPosts);
  }, [siteName]);

  return (
    <div className={css({ display: 'flex' })}>
      <div
        className={css({
          mx: 'auto',
          display: 'grid',
          gridTemplateColumns: { base: '1fr', md: 'repeat(2, 1fr)' },
          gap: 6,
        })}
      >
        {posts.map((post, idx) => (
          <Article
            key={idx}
            url={post.link}
            image={post.ogImageURL}
            title={post.title}
            siteName={post.siteName}
            isoDate={post.isoDate}
          />
        ))}
      </div>
    </div>
  );
};
