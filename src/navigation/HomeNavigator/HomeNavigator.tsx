import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../../Screens';
import {HomeNavigatorParamList} from './types';

const Stack = createNativeStackNavigator<HomeNavigatorParamList>();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={HomeScreen} name="Home"></Stack.Screen>
    </Stack.Navigator>
  );
};
