import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes';
import light from './src/styles/light';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import { API_URL } from './env';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `${API_URL}/graphql`,
});

console.log(`${API_URL}/graphql`);

export default function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={light}>
        <NavigationContainer>
          <StatusBar backgroundColor={light.color.background} />
          <Routes />
        </NavigationContainer>
      </ThemeProvider>
    </ApolloProvider>
  );
}
