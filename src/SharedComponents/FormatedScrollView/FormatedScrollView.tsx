import React from 'react';
import {ScrollView, ScrollViewProps} from 'react-native';
import {styles} from './style';

export const FormatedScrollView = (props: ScrollViewProps) => {
  return <ScrollView style={styles.scrollView} {...props} />;
};
