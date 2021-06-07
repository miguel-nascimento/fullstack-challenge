import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes';
import light from './src/styles/light';

export default function App() {
  return (
    <ThemeProvider theme={light}>
      <NavigationContainer>
        <StatusBar backgroundColor={light.color.background} />
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
