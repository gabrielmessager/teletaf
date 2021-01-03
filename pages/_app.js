import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import { theme } from '../theme/theme';
import PreviewImage from '../public/preview.jpg';

const GlobalStyle = createGlobalStyle`
  html, body {
    position: relative;
    overflow-x: hidden;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${theme.colors.gray010};
  }
`;

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:image"
          content={`https://teletaf.io/${PreviewImage}`}
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="bureau télétravail" />
      </Head>
      <ThemeProvider theme={theme}>
        <div>
          <Header pathname={router.pathname} />
          {/* <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
              transition: {
                duration: 0.2,
              },
            },
          }}
        > */}
          {/* <AnimatePresence exitBeforeEnter>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.5, 0, 0, 1] }}
            key={`${router.asPath}`}
          > */}
          <Component {...pageProps} />
          {/* <Footer /> */}
          {/* </motion.div>
        </AnimatePresence> */}
          {/* </motion.div> */}
        </div>
      </ThemeProvider>
    </>
  );
}
