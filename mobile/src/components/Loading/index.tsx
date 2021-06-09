import { useTheme } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Container } from './styles';

const Loading: React.FC = () => {
  const theme = useTheme();
  return (
    <Container>
      <ActivityIndicator color={theme.colors.primary} size="large" />
    </Container>
  );
};

export default Loading;
