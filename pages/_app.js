import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Header } from '../components/Header';
import { theme } from '../theme/theme';

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
        <title>Télétaf | Offres de télétravail pour francophones</title>
        <link rel="icon" href="/favicon.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <Header pathname={router.pathname} />
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
          }}
          style={{
            height: '100vh',
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </ThemeProvider>
    </>
  );
}
