import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeScreen, SettingsScreen} from '../../Screens';
import {HomeNavigatorParamList} from './types';

const Drawer = createDrawerNavigator<HomeNavigatorParamList>();

export const HomeNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen component={HomeScreen} name="Home"></Drawer.Screen>
      <Drawer.Screen component={SettingsScreen} name="Settings"></Drawer.Screen>
    </Drawer.Navigator>
  );
};
