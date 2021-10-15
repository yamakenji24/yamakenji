import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import 'styles/globals.css';

function App({ Component, pageProps, router }: AppProps): JSX.Element {
  return (
    <ChakraProvider>
      <Component {...pageProps} key={router.route} />
    </ChakraProvider>
  );
}

export default App;
