import React from 'react';
import {View, ViewProps} from 'react-native';
import {styles} from './style';

export const FormatedView = (props: ViewProps) => {
  return <View style={styles.scrollView} {...props} />;
};
