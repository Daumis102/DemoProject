import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthNavigatorParamList} from '../AuthNavigator/types';
import {HomeNavigatorParamList} from '../HomeNavigator';

export type RootNavigatorParamsList = {
  Root: undefined;
  AuthNavigator: {screen: keyof AuthNavigatorParamList};
  HomeNavigator: {screen: keyof HomeNavigatorParamList};
};

export type RootScreenProps = NativeStackScreenProps<
  RootNavigatorParamsList,
  'Root'
>;
