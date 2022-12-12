import React from 'react';
import {TextInput as NativeTextInput, TextInputProps} from 'react-native';
import {styles} from './styles';

export const TextInput = (props: TextInputProps) => {
  return <NativeTextInput style={styles.input} {...props} />;
};
