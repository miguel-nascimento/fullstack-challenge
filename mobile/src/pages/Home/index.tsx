import React, { useContext, useEffect, useState } from 'react';
import { FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import Card, { BookProps } from '../../components/Card';
import Hello from '../../components/Hello';

import Search from '../../components/Search';

import { Button, ButtonText, Container, LoadMore } from './styles';
import {
  useGetBooksLazyQuery,
  useGetBooksQuery,
} from '../../generated/graphql';
import { useNavigation } from '@react-navigation/core';
import Loading from '../../components/Loading';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const [books, setBooks] = useState<any>();
  const [get] = useGetBooksLazyQuery({
    onCompleted: (data) => {
      if (data) {
        setBooks(data.getBooks);
      }
    },
    fetchPolicy: 'network-only',
  });

  const [cursor, setCursor] = useState<string>('');
  const [getBooksUsingCursor, { loading }] = useGetBooksLazyQuery({
    variables: { cursor: cursor },
    pollInterval: 1000,
    onCompleted: (data) => {
      if (data) {
        setBooks([...books, ...data.getBooks]);
        console.log([...books, ...data.getBooks]);
      }
    },
  });

  useEffect(() => {
    get();
  }, []);

  const toDetailPage = (id: any) => {
    console.log(id);
    navigation.navigate('Detail', { id });
  };
  const loadMore = () => {
    const lastItem = books[books.length - 1];
    if (lastItem) {
      setCursor(lastItem.createdAt);
      getBooksUsingCursor();
    }
  };

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <Search
          onSubmitEditing={() => console.log('Enviado')}
          placeholder="Search book"
        />
        <Hello name="Mehmed Al Fatih" />
        {loading && <Loading />}
        {books && (
          <FlatList<BookProps>
            data={books}
            contentContainerStyle={{ paddingBottom: 125 }}
            numColumns={3}
            keyExtractor={(item) => String(item.id)}
            onRefresh={get}
            refreshing={false}
            ListFooterComponent={() => (
              <LoadMore>
                <Button onPress={loadMore}>
                  <ButtonText>Load more</ButtonText>
                </Button>
              </LoadMore>
            )}
            renderItem={({ item }) => (
              <Card
                onPress={() => {
                  toDetailPage(item.id);
                }}
                image={item.image}
                author={item.author}
                title={item.title}
              />
            )}
          />
        )}
      </KeyboardAvoidingView>
    </Container>
  );
};

export default Home;
