import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectUserName} from '../../redux';
import {AuthNavigator} from '../AuthNavigator';
import {HomeNavigator} from '../HomeNavigator';
import {RootNavigatorParamsList} from './types';

const Stack = createNativeStackNavigator<RootNavigatorParamsList>();

export const RootNavigator = () => {
  const userName = useSelector(selectUserName);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {userName ? (
          <Stack.Screen component={HomeNavigator} name="HomeNavigator" />
        ) : (
          <Stack.Screen component={AuthNavigator} name="AuthNavigator" />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
