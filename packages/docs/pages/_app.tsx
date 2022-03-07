import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import 'nextra-theme-docs/style.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to docs!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
