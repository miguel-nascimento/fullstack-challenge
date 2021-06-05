import React from 'react';

import { Container, Title, Name } from './styles';

export interface IHelloProps {
  name: string;
}

const Hello: React.FC<IHelloProps> = ({ name }) => (
  <Container>
    <Title>
      Hi,
      {' '}
      <Name>{name}</Name>
      {' '}
      👋
    </Title>
  </Container>
);

export default Hello;
