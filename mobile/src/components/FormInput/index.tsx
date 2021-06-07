import React from 'react';
import { DeepMap, FieldValues, FieldError } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import { Label, Input, Container, InputContainer, ErrorText } from './styles';

export interface FormInputProps extends TextInputProps {
  name: string;
  multiline?: boolean;
  errors?: DeepMap<FieldValues, FieldError>;
}

const FormInput: React.FC<FormInputProps> = ({
  onBlur,
  onChangeText,
  errors,
  value,
  name,
  multiline,
}: FormInputProps) => {
  return (
    <Container>
      <Label>{name}</Label>
      <InputContainer
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,

          elevation: 3,
        }}
        multiline={multiline}
      >
        <Input
          style={{ textAlignVertical: multiline ? 'top' : 'auto' }}
          value={value}
          numberOfLines={10}
          multiline={multiline}
          onBlur={onBlur}
          onChangeText={onChangeText}
        />
      </InputContainer>
      {errors && <ErrorText>{name} is required.</ErrorText>}
    </Container>
  );
};

export default FormInput;
