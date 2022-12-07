import React from 'react';
import {View, ViewProps} from 'react-native';
import {styles} from './style';
type Props = {
  children: React.ReactNode[] | React.ReactNode;
};

export const FormatedView = (props: ViewProps) => {
  return <View style={styles.scrollView} {...props}></View>;
};
