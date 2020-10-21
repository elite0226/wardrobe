import React from 'react';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';

import { useApollo } from '../lib/apolloClient';

import '../styles/globals.scss';

const App: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default App;
