import { ReactNode } from 'react';
import { Header } from 'ui/common/header';
import './global.css';
import { css } from '../../styled-system/css';
import { Footer } from 'ui/common/footer';
import { UnifiedBackground } from './_components/UnifiedEffects';

const DEFAULT_TITLE = 'yamakenji24 profile';
const DEFAULT_DESCRIPTION =
  'このプロフィールサイトです。Next.jsを利用して、作成しています。製作物や記事など、随時更新していきます';
const OGIMAGEURL = `${process.env.NEXT_PUBLIC_BASE_URL}/api/og`;

export const metadata = {
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  siteName: DEFAULT_TITLE,
  openGraph: {
    url: process.env.NEXT_PUBLIC_BASE_URL,
    images: {
      url: OGIMAGEURL
    }
  },
  images: [
    {
      url: OGIMAGEURL,
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <UnifiedBackground type="global" colorScheme="blue" />
        <Header />
        <div className={css({ marginBottom: '64px' })}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
