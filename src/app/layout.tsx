import '../styles/globals.css';
import type { ReactNode } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';

const DEFAULT_TITLE = 'yamakenji24 profile';
const DEFAULT_DESCRIPTION =
  'このプロフィールサイトです。Next.jsを利用して、作成しています。製作物や記事など、随時更新していきます';
const OGIMAGEURL = `${process.env.NEXT_PUBLIC_BASE_URL}/api/og?title=${'toppage'}`

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>{DEFAULT_TITLE}</title>
        <link rel="icon" href="/favicon.png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={DEFAULT_TITLE} />
        <meta property="og:title" content={DEFAULT_TITLE} />
        <meta property="og:description" content={DEFAULT_DESCRIPTION} />
        <meta property="og:image" content={OGIMAGEURL} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={DEFAULT_TITLE} />
        <meta name="twitter:description" content={DEFAULT_DESCRIPTION} />
        <meta name="twitter:image " content={OGIMAGEURL} />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

const Header = () => {
  return (
    <div className="flex px-4 py-2 bg-zinc-900 justify-between">
      <div className="flex pl-2 md:pl-4 pr-4 md:pr-8">
        <Image src="/logo.png" width="60" height="40" alt="logo" priority={true} />
      </div>
      <div className=" flex items-center">
        <NavItem url="/" title="Top" />
        <NavItem url="/work" title="Work" />
        <NavItem url="/article" title="Article" />
      </div>
    </div>
  );
};

const NavItem = ({ url, title }: { url: string; title: string }) => (
  <p className="pr-4 md:pr-8 text-white">
    <NextLink
      data-test-id={`navigation-${title}`}
      href={url}
      className="font-bold no-underline ease-in-out duration-500 hover:text-blue-500"
    >
      {title}
    </NextLink>
  </p>
);
