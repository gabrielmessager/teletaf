import Head from "next/head";
import { useRouter } from "next/router";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Header } from "../components/Header";
import { theme } from "../theme/theme";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${theme.colors.gray010};
    overflow-x: hidden;
  }
`;

// const theme = {
//   colors: {
//     primary: "#0070f3",
//   },
// };

export default function App({ Component, pageProps }) {
  console.log("pageProps", pageProps);
  const router = useRouter();
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Télétaf</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Header pathname={router.pathname} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
