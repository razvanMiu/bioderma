import { Provider } from 'react-redux';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import store from '@bioderma/reducers';
import getLayout from '@bioderma/components/layout';
import createEmotionCache from '@bioderma/createEmotionCache';
import CustomThemeProvider from '@bioderma/themes';

import '@bioderma/styles/global.scss';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function App(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const Layout = getLayout(Component.layout);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        {Component.title && <title>{Component.title}</title>}
        {Component.description && (
          <meta name="description" content={Component.description} />
        )}
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <CustomThemeProvider>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CustomThemeProvider>
      </Provider>
    </CacheProvider>
  );
}
