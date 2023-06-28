import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Icon} from 'react-native-eva-icons';
import {BookingScreen, FavoriteScreen, SettingsScreen} from '../screens';
import {BottomTabNavigatorParamList} from '../types/navigation';
import HomeStackNavigator from './HomeStackNavigator';

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

type BottomTypes = keyof BottomTabNavigatorParamList;

type BottomTabsType = {
  id: number;
  name: BottomTypes;
  component: () => React.JSX.Element;
  icon: ({color, size}: {color: string; size: number}) => React.JSX.Element;
};

const BOTTOM_NAVS: BottomTabsType[] = [
  {
    id: 1,
    name: 'HomeStack',
    component: HomeStackNavigator,
    icon: ({color, size}: {color: string; size: number}) => (
      <Icon name="home" width={size} height={size} fill={color} />
    ),
  },
  {
    id: 2,
    name: 'BookingScreen',
    component: BookingScreen,
    icon: ({color, size}: {color: string; size: number}) => (
      <Icon name="calendar-outline" width={size} height={size} fill={color} />
    ),
  },
  {
    id: 3,
    name: 'FavoriteScreen',
    component: FavoriteScreen,
    icon: ({color, size}: {color: string; size: number}) => (
      <Icon name="heart-outline" width={size} height={size} fill={color} />
    ),
  },
  {
    id: 4,
    name: 'SettingsScreen',
    component: SettingsScreen,
    icon: ({color, size}: {color: string; size: number}) => (
      <Icon name="settings-outline" width={size} height={size} fill={color} />
    ),
  },
];

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 80,
          position: 'absolute',
          bottom: 10,
          backgroundColor: '#0b182b',
          // borderTopLeftRadius: 30,
          // borderTopRightRadius: 30,
          borderRadius: 30,
        },
        tabBarIconStyle: {
          color: 'red',
        },
      }}>
      {BOTTOM_NAVS.map(nav => (
        <Tab.Screen
          key={`bottom-nav-${nav.id}`}
          name={nav.name}
          component={nav.component}
          options={{
            tabBarIcon: nav.icon,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
