import {StyleSheet} from 'react-native';

const baseStyle = StyleSheet.create({});

const portrait = StyleSheet.create({
  ...baseStyle,
  headerView: {flexBasis: 150},
  headerText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    flex: 1,
  },
  scrollView: {
    borderWidth: 1,
  },
  container: {
    borderWidth: 1,
    flexDirection: 'column',
    flex: 1,
  },
});

const landscape = StyleSheet.create({
  ...baseStyle,
  headerView: {flexBasis: 50, flexGrow: 1},
  headerText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    flex: 1,
  },
  scrollView: {
    flexBasis: 200,
    flexGrow: 1,
    borderWidth: 1,
  },
  container: {
    borderWidth: 1,
    flexDirection: 'row',
    flex: 1,
  },
});

const listItem = StyleSheet.create({
  listItem: {flexBasis: 50, margin: 10, padding: 10},
});

const styles = {portrait, landscape, listItem};
export default styles;
