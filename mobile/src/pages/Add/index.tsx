import React, { useState, useEffect, useRef } from 'react';
import { Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {
  Container,
  Picker,
  Button,
  AddButtonText,
  Header,
  HeaderText,
  Body,
  CoverPicker,
  Wrapper,
  Label,
  PickerContainer,
  Cover,
  CoverContainer,
} from './styles';
import FormInput from '../../components/FormInput';
import { ScrollView } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { Feather } from '@expo/vector-icons';
import { useCreateBookMutation } from '../../generated/graphql';
import { useNavigation } from '@react-navigation/core';

const Add: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [create] = useCreateBookMutation();
  const navigation = useNavigation();
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { author: '', description: '', subtitle: '', title: '' },
  });

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const onSubmit = (data: any) => {
    create({ variables: data });
    console.log(data, image);
    reset();
    setImage(null);
    navigation.navigate('Home', { screen: 'Index' });
  };
  return (
    <Wrapper>
      <Container>
        <Header>
          <HeaderText>Add a new book</HeaderText>
        </Header>
        <ScrollView keyboardShouldPersistTaps="handled">
          <Body>
            <Label>Image</Label>
            <CoverPicker>
              <PickerContainer>
                <Picker onPress={pickImage}>
                  <Feather
                    name="upload"
                    size={24}
                    color="rgba(254, 106, 120, 0.8)"
                  />
                </Picker>
              </PickerContainer>
              {image && (
                <CoverContainer>
                  <Cover source={{ uri: image }} />
                </CoverContainer>
              )}
            </CoverPicker>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <FormInput
                  name="Title"
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  errors={errors.title}
                />
              )}
              name="title"
              rules={{ required: true }}
            />
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <FormInput
                  name="Subtitle"
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                />
              )}
              name="subtitle"
            />
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <FormInput
                  name="Author"
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  errors={errors.author}
                />
              )}
              name="author"
              rules={{ required: true }}
            />
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <FormInput
                  name="Description"
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  multiline
                  numberOfLines={10}
                  errors={errors.description}
                />
              )}
              name="description"
              rules={{ required: true }}
            />
            <Button onPress={() => handleSubmit(onSubmit)()}>
              <AddButtonText>Add new book</AddButtonText>
            </Button>
          </Body>
        </ScrollView>
      </Container>
    </Wrapper>
  );
};

export default Add;
