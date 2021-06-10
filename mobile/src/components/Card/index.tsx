import React from 'react';
import { ImageContainer, Author, Container, Cover, Title } from './styles';
import imageNotFound from '../../assets/ImageNotFound/imageNotFound.png';
import { API_URL } from '../../../env';

export interface BookProps {
  id?: string;
  title: string;
  author: string;
  image?: string;
  createdAt?: string;
  onPress: () => {} | void;
}

const Card: React.FC<BookProps> = ({ image, title, author, onPress }) => {
  const imageUrl = image
    ? { uri: `${API_URL}/static/${image}` }
    : imageNotFound;
  return (
    <Container>
      <ImageContainer
        onPress={onPress}
        style={{
          shadowColor: 'rgba(212, 173, 134, 0.4926)',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.4926,
          shadowRadius: 10,

          elevation: 3,
        }}
      >
        <Cover source={imageUrl} />
      </ImageContainer>
      <Title>{title}</Title>
      <Author>by {author}</Author>
    </Container>
  );
};

export default Card;
