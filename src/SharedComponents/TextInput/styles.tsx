// Allows having different styles for different platforms
// Separates styles from component - cleaner component

import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  input: {
    margin: 5,
    padding: 5,
    flexBasis: 30,
    borderWidth: 2,
    borderRadius: 3,
  },
});
