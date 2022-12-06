import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type HomeNavigatorParamList = {
  Home: undefined;
};

export type LoginScreenProps = NativeStackScreenProps<
  HomeNavigatorParamList,
  'Home'
>;
