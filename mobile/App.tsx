import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes';
import light from './src/styles/light';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { API_URL } from './env';
import { createUploadLink } from 'apollo-upload-client';

const link = createUploadLink({ uri: `${API_URL}/graphql` });

const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Book: {
        keyFields: ['id'],
      },
    },
  }),
  link,
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={light}>
        <StatusBar backgroundColor={light.color.background} />
        <Routes />
      </ThemeProvider>
    </ApolloProvider>
  );
}
