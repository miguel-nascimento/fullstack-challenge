import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import light from '../../styles/light';
import { Container } from './styles';

const Loading: React.FC = () => {
  return (
    <Container>
      <ActivityIndicator color={light.color.primary} size="large" />
    </Container>
  );
};

export default Loading;
