import React, { useContext, useEffect, useState } from 'react';
import { FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import Card, { BookProps } from '../../components/Card';
import Hello from '../../components/Hello';

import Search from '../../components/Search';

import { Button, ButtonText, Container, LoadMore } from './styles';
import { useGetBooksLazyQuery } from '../../generated/graphql';
import { useNavigation } from '@react-navigation/core';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const [books, setBooks] = useState<any>();
  const [get, { loading }] = useGetBooksLazyQuery({
    onCompleted: (data) => {
      setBooks(data.getBooks);
    },
    fetchPolicy: 'network-only',
  });

  const [cursor, setCursor] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [getBooksUsingCursor] = useGetBooksLazyQuery({
    variables: { cursor },
    onCompleted: (data) => {
      setBooks([...books, ...data.getBooks]);
    },
    fetchPolicy: 'network-only',
  });

  const [getFiltered] = useGetBooksLazyQuery({
    variables: { title: String(title) },
    onCompleted: (data) => {
      setBooks(data.getBooks);
      console.log(data.getBooks);
    },
    fetchPolicy: 'network-only',
  });

  useEffect(() => {
    get();
  }, []);

  const toDetailPage = (id: any) => {
    navigation.navigate('Detail', { id });
  };

  const loadMore = () => {
    const lastItem = books[books.length - 1];
    if (lastItem) {
      console.log(books, lastItem);
      setCursor(lastItem.createdAt);
      getBooksUsingCursor();
    }
  };

  const filterBooks = (title: string) => {
    setTitle(title);
    getFiltered();
  };

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <Search
          placeholder="Search book"
          onSubmitEditing={(e) => filterBooks(e.nativeEvent.text)}
        />
        <Hello name="Mehmed Al Fatih" />
        {books && (
          <FlatList<BookProps>
            data={books}
            contentContainerStyle={{ paddingBottom: 125 }}
            numColumns={3}
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
