import {StyleSheet} from 'react-native';

const baseStyle = StyleSheet.create({});

const portrait = StyleSheet.create({
  ...baseStyle,
  headerView: {flexBasis: 100, flexGrow: 1},
  headerText: {
    backgroundColor: 'blue',
    textAlign: 'center',
    textAlignVertical: 'center',
    flex: 1,
  },
  scrollView: {
    flexBasis: 50,
    backgroundColor: 'blue',
    flexGrow: 2,
    borderWidth: 1,
  },
  scrollViewItem: {
    flexBasis: 50,
    flexGrow: 1.3,
    backgroundColor: 'red',
  },
  container: {
    height: 300,
    borderWidth: 1,
    flexDirection: 'column',
  },
});

const landscape = StyleSheet.create({
  ...baseStyle,
  headerView: {flexBasis: 100, flexGrow: 1},
  headerText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    flex: 1,
  },
  scrollView: {
    flexBasis: 50,
    flexGrow: 2,
    borderWidth: 1,
  },
  scrollViewItem: {
    flexBasis: 50,
    flexGrow: 1.3,
    backgroundColor: 'red',
  },
  container: {
    height: 300,
    borderWidth: 1,
    flexDirection: 'row',
  },
});

const styles = {portrait, landscape};
export default styles;
