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
        <meta name="robots" content="index" />

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
        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta
          name="twitter:url"
          content={`https://teletaf.io${router.pathname}`}
        /> */}
        <meta name="twitter:site" content="@teletafofficiel"> - @teletafofficiel
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content={`https://teletaf.io/${PreviewImage}`}
        />
      </Head>
      {children}
    </>
  );
}
