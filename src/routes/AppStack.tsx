import React from 'react'; // Import the missing 'React' package

import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SettingsScreen} from '@screens';

import {AppTabBottomTabParamList, AppTabNavigator} from './AppTabNavigator';

export type AppStackParamList = {
  SettingsScreen: undefined;
  AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParamList>;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, fullScreenGestureEnabled: true}}
      initialRouteName="AppTabNavigator">
      <Stack.Screen name="AppTabNavigator" component={AppTabNavigator} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
