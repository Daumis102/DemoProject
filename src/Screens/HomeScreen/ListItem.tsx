import React from 'react';
import {Text, View} from 'react-native';

type Props = {
  text: string;
};

export const ListItem = ({text}: Props) => {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
};
