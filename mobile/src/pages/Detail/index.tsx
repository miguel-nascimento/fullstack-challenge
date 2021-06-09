import React, { useEffect, useState } from 'react';
import {
  Wrapper,
  Container,
  Background,
  ImageContainer,
  Image,
  Author,
  Body,
  Bold,
  Description,
  TitleSubtitle,
  Back,
} from './styles';
import backgroundImage from '../../assets/BackgroundDetail/detail.png';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import { useGetBookQuery } from '../../generated/graphql';
import imageNotFound from '../../assets/ImageNotFound/imageNotFound.png';
import { API_URL } from '../../../env';
import Loading from '../../components/Loading';

const Detail = ({ route }: any) => {
  const [book, setBook] = useState<any>();
  const { id } = route.params;
  const { data, loading } = useGetBookQuery({
    variables: { id },
    fetchPolicy: 'network-only',
    onCompleted: () => {
      setBook(data?.getBook);
      console.log(book);
    },
  });

  return (
    <Wrapper>
      <StatusBar translucent backgroundColor="transparent" />
      {loading && <Loading />}
      {book && (
        <Container>
          <Background source={backgroundImage}>
            <Back>
              <Feather name="arrow-left" size={24} color="black" />
            </Back>
            <ImageContainer
              style={{
                shadowColor: 'rgba(212, 173, 134, 0.4926)',
                shadowOffset: {
                  width: 5,
                  height: 5,
                },
                shadowOpacity: 0.4926,
                shadowRadius: 10,

                elevation: 3,
              }}
            >
              {book.image && (
                <Image source={{ uri: `${API_URL}/static/${book.image}` }} />
              )}
              <Image source={imageNotFound} />
            </ImageContainer>
          </Background>
          <Body>
            <TitleSubtitle>
              <Bold>{book.title}</Bold>
              {book.subtitle && (
                <TitleSubtitle>: {book.subtitle}</TitleSubtitle>
              )}
            </TitleSubtitle>
            <Author>{book.author}</Author>
            <Description>{book.description}</Description>
          </Body>
        </Container>
      )}
    </Wrapper>
  );
};

export default Detail;
