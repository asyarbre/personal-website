import axios from 'axios';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { SWRConfig } from 'swr';

import '@/styles/globals.css';

import { ThemeProvider } from '@/components/provider/theme-provider';

import defaultSEOConfig from '../../next-seo.config';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...defaultSEOConfig} />
      <ThemeProvider attribute='class' defaultTheme='dark' enableSystem={false}>
        <SWRConfig
          value={{
            fetcher: (url) => axios.get(url).then((res) => res.data),
          }}
        >
          <Component {...pageProps} />
        </SWRConfig>
      </ThemeProvider>
    </>
  );
}
