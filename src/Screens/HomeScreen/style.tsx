import {StyleSheet} from 'react-native';

const baseStyle = StyleSheet.create({});

const portrait = StyleSheet.create({
  ...baseStyle,
  headerView: {flexBasis: 200},
  headerText: {
    backgroundColor: 'green',
    textAlign: 'center',
    textAlignVertical: 'center',
    flex: 1,
  },
  scrollView: {
    flexBasis: 300,
    backgroundColor: 'green',
    borderWidth: 1,
  },
  scrollViewItem: {
    flexBasis: 50,
    backgroundColor: 'red',
  },
  container: {
    borderWidth: 1,
    flexDirection: 'column',
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
    flexBasis: 50,
    flexGrow: 1,
    borderWidth: 1,
  },
  scrollViewItem: {
    flexBasis: 50,
    flexGrow: 1.3,
    backgroundColor: 'blue',
  },
  container: {
    borderWidth: 1,
    flexDirection: 'row',
  },
});

const styles = {portrait, landscape};
export default styles;
