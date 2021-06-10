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
  Divider,
  Item,
  Label,
  Floating,
  Content,
  ImageSection,
} from './styles';
import backgroundImage from '../../assets/BackgroundDetail/detail.png';
import { TouchableWithoutFeedback, useWindowDimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import { useGetBookQuery } from '../../generated/graphql';
import { API_URL } from '../../../env';
import { ScrollView } from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/core';
import imageNotFound from '../../assets/ImageNotFound/imageNotFound.png';

const Detail = ({ route }: any) => {
  const theme = useTheme();
  const navigation = useNavigation();
  const dimensions = useWindowDimensions();
  const FloatingBar = () => (
    <Floating
      style={{
        top: dimensions.width,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
        elevation: 1,
      }}
    >
      <Item>
        <Feather name="book-open" size={24} color={theme.color.iconFloating} />
        <Label>Read</Label>
      </Item>
      <Divider />
      <Item>
        <Feather name="headphones" size={24} color={theme.color.iconFloating} />
        <Label>Listen</Label>
      </Item>
      <Divider />
      <Item>
        <Feather name="share" size={24} color={theme.color.iconFloating} />
        <Label>Share</Label>
      </Item>
    </Floating>
  );

  const [image, setImage] = useState<any>();

  const [book, setBook] = useState<any>();
  const { id } = route.params;
  const { data, loading } = useGetBookQuery({
    variables: { id },
    fetchPolicy: 'network-only',
    onCompleted: () => {
      setBook(data?.getBook);
    },
  });

  useEffect(() => {
    if (!loading && book) {
      console.log(data?.getBook?.image);
      setImage(
        book.image ? { uri: `${API_URL}/static/${book.image}` } : imageNotFound
      );
      console.log(image);
    }
  }, [loading, book]);
  return (
    <Wrapper>
      <StatusBar translucent backgroundColor="transparent" />
      {book && (
        <Container>
          <Background source={backgroundImage}>
            <Content>
              <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                <Back>
                  <Feather name="arrow-left" size={24} color="black" />
                </Back>
              </TouchableWithoutFeedback>
              <ImageSection>
                <ImageContainer
                  style={{
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.23,
                    shadowRadius: 2.62,

                    elevation: 4,
                  }}
                >
                  <Image source={image} />
                </ImageContainer>
              </ImageSection>
            </Content>
          </Background>
          <Body>
            <TitleSubtitle>
              <Bold>{book.title}</Bold>
              {book.subtitle && (
                <TitleSubtitle>: {book.subtitle}</TitleSubtitle>
              )}
            </TitleSubtitle>
            <Author>{book.author}</Author>
            <ScrollView>
              <Description>{book.description}</Description>
            </ScrollView>
            <FloatingBar />
          </Body>
        </Container>
      )}
    </Wrapper>
  );
};

export default Detail;
