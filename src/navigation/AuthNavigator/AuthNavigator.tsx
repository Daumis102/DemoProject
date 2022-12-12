import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../../Screens';
import {RegisterScreen} from '../../Screens/RegisterScreen';
import {AuthNavigatorParamList} from './types';

const Stack = createNativeStackNavigator<AuthNavigatorParamList>();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={LoginScreen} name="Login" />
      <Stack.Screen component={RegisterScreen} name="Register" />
    </Stack.Navigator>
  );
};
