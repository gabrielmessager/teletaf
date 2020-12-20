import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getSEOTags } from '../../constants/seo';
import PreviewImage from '../../public/preview.jpg';

export function Layout({ children }) {
  const router = useRouter();
  const { description, title } = getSEOTags(router);

  return (
    <>
      <Head>
        <link rel="canonical" href={`https://teletaf.io${router.pathname}`} />
        {/* Primary Meta Tags */}
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://teletaf.io${router.pathname}`}
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content={`https://teletaf.io/${PreviewImage}`}
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://teletaf.io${router.pathname}`}
        />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta
          property="twitter:image"
          content={`https://teletaf.io/${PreviewImage}`}
        />
      </Head>
      {children}
    </>
  );
}
