import { useEffect } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import { Header } from 'ui/header';
import 'styles/globals.css';

function App({ Component, pageProps, router }: AppProps): JSX.Element {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>yamakenji24 profile</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <ChakraProvider>
        <Header />
        <Component {...pageProps} key={router.route} />
      </ChakraProvider>       
    </>
  );
}

export default App;
