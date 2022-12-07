import React from 'react';
import {Text, View} from 'react-native';
import useOrientationStyle from '../../hooks/useOrientationStyle';
import {FormatedScrollView, FormatedView} from '../../SharedComponents';
import styles from './style';

export const HomeScreen = () => {
  const {style} = useOrientationStyle(styles.portrait, styles.landscape);
  return (
    <View style={style.container}>
      <FormatedView style={style.headerView}>
        <Text style={style.headerText}>Hello</Text>
      </FormatedView>
      <FormatedScrollView style={style.scrollView}>
        <View style={style.scrollViewItem}>
          <Text>Scrollable</Text>
        </View>
        <View style={style.scrollViewItem}>
          <Text>Scrollable</Text>
        </View>
        <View style={style.scrollViewItem}>
          <Text>Scrollable</Text>
        </View>
        <View style={style.scrollViewItem}>
          <Text>Scrollable</Text>
        </View>
        <View style={style.scrollViewItem}>
          <Text>Scrollable</Text>
        </View>
      </FormatedScrollView>
    </View>
  );
};
