import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type AuthNavigatorParamList = {
  Login: undefined;
  Register: undefined;
};

export type LoginScreenProps = NativeStackScreenProps<
  AuthNavigatorParamList,
  'Login'
>;

export type RegisterScreenProps = NativeStackScreenProps<
  AuthNavigatorParamList,
  'Login'
>;
