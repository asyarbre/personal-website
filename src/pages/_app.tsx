import type { AppProps } from 'next/app';

import '@/styles/globals.css';

import { ThemeProvider } from '@/components/provider/theme-provider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute='class' defaultTheme='dark' enableSystem={false}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
