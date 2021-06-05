import React from 'react';

import { Container, Text, Name } from './styles';

export interface IHelloProps {
  name: string;
}

const Hello: React.FC<IHelloProps> = ({ name }) => (
  <Container>
    <Text>
      Hi,
      <Name>{name}</Name>
      👋
    </Text>
  </Container>
);

export default Hello;
