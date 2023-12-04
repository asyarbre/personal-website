import Head from 'next/head';
import React from 'react';

export const Seo: React.FC<{
  title?: string;
  metaDescription?: string;
  ogImageUrl?: string;
  pathname?: string;
}> = ({
  title,
  metaDescription = "An online portofolio by Asya'ri, a full stack developer from Indonesia.",
  ogImageUrl = 'https://cdn.discordapp.com/attachments/872706873349001261/1181056795029024818/banner.png',
  pathname = '',
}) => {
  const defaultTitle = "Asya'ri";

  const baseUrl = 'https://porto-asyari.web.app/';

  const pageUrl = new URL(pathname, baseUrl).toString();

  return (
    <Head>
      <title>{title ? title + ' | ' + defaultTitle : defaultTitle}</title>

      {/* metadata */}
      <meta name='robots' content='follow, index' />
      <meta name='title' content={title ? title + ' | ' + defaultTitle : defaultTitle} />
      <meta name='description' content={metaDescription} />
      <meta name='og:image' itemProp='image' content={ogImageUrl} />
      <meta property='og:url' content={pageUrl} />

      <meta property='og:type' content='website' />
      <meta property='og:image' itemProp='image' content={ogImageUrl} />
      <meta property='og:title' content={title ? title + ' | ' + defaultTitle : defaultTitle} />
      <meta property='og:description' content={metaDescription} />

      <meta name='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content={pageUrl} />
      <meta name='twitter:title' content={title ? title + ' | ' + defaultTitle : defaultTitle} />
      <meta name='twitter:image' content={ogImageUrl} />
      <meta property='twitter:description' content={metaDescription} />

      {/* favicon */}
      {favicons.map((favicon, index) => (
        <link key={index} {...favicon} />
      ))}
    </Head>
  );
};

type Favicons = {
  rel: string;
  href: string;
  sizes?: string;
  type?: string;
};

const favicons: Array<Favicons> = [
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicon/apple-touch-icon.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon/favicon-16x16.png',
  },
  {
    rel: 'icon',
    href: '/favicon/favicon.ico',
  },
  {
    rel: 'manifest',
    href: '/favicon/site.webmanifest',
  },
];
