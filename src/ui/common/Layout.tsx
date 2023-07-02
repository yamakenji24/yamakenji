import type { FC, ReactNode } from 'react';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import { Header } from 'ui/common/header';

const DEFAULT_TITLE = 'yamakenji24 profile';
const DEFAULT_DESCRIPTION =
  'このプロフィールサイトです。Next.jsを利用して、作成しています。製作物や記事など、随時更新していきます';

interface Props {
  children?: ReactNode;
  ogImageUrl?: string;
}

export const Layout: FC<Props> = ({ children, ogImageUrl }) => {
  return (
    <div>
      <Head>
        <title>{DEFAULT_TITLE}</title>
        <link rel="icon" href="/favicon.png" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={DEFAULT_TITLE} />
        <meta property="og:title" content={DEFAULT_TITLE} />
        <meta property="og:description" content={DEFAULT_DESCRIPTION} />
        <meta property="og:image" content={ogImageUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={DEFAULT_TITLE} />
        <meta name="twitter:description" content={DEFAULT_DESCRIPTION} />
        <meta name="twitter:image " content={ogImageUrl} />
      </Head>
      <Header />
      <div>{children}</div>
    </div>
  );
};
