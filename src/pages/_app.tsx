import type { AppProps } from 'next/app';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HelmetProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </HelmetProvider>
  );
}
