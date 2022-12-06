import React from 'react';
import {ScrollView} from 'react-native';
import {styles} from './style';
type Props = {
  children: React.ReactNode[] | React.ReactNode;
};
export const FormatedScrollView = ({children}: Props) => {
  return <ScrollView style={styles.scrollView}>{children}</ScrollView>;
};
