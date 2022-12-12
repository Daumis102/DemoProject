import {DrawerScreenProps} from '@react-navigation/drawer';

export type HomeNavigatorParamList = {
  Home: undefined;
  Settings: undefined;
};

export type HomeScreenProps = DrawerScreenProps<HomeNavigatorParamList, 'Home'>;
export type SettingsScreenProps = DrawerScreenProps<
  HomeNavigatorParamList,
  'Settings'
>;
