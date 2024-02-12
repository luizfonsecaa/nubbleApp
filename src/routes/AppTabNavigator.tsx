import React from 'react';

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {Icon, Text} from '@components';
import {
  FavoriteScreen,
  HomeScreen,
  MyProfileScreen,
  NewPostScreen,
} from '@screens';

import {AppTabBar} from './AppTabBar';

export type AppTabBottomTabParamList = {
  HomeScreen: undefined;
  NewPostScreen: undefined;
  FavoriteScreen: undefined;
  MyProfileScreen: undefined;
};

const Tab = createBottomTabNavigator<AppTabBottomTabParamList>();

export function AppTabNavigator() {
  function renderTabBar(props: BottomTabBarProps) {
    return <AppTabBar {...props} />;
  }

  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => renderTabBar(props)}>
      <Tab.Screen
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              preset="paragraphCaption"
              color={focused ? 'primary' : 'backgroundContrast'}>
              Inicio
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'homeFill' : 'home'}
              color={focused ? 'primary' : 'backgroundContrast'}
            />
          ),
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen name="NewPostScreen" component={NewPostScreen} />
      <Tab.Screen name="FavoriteScreen" component={FavoriteScreen} />
      <Tab.Screen name="MyProfileScreen" component={MyProfileScreen} />
    </Tab.Navigator>
  );
}
