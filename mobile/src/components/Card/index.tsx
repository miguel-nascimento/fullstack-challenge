import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Author, Container, Cover, Title } from './styles';

export interface IBookProps {
  image?: string;
  title: string;
  author: string;
}

const Card: React.FC<IBookProps> = ({ image, title, author }) => (
  <Container>
    <TouchableOpacity>
      <Cover source={{ uri: image }} />
    </TouchableOpacity>
    <Title>{title}</Title>
    <Author>
      by
      {' '}
      {author}
    </Author>
  </Container>
);

export default Card;
