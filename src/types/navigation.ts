// import {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

import {NavigatorScreenParams} from '@react-navigation/native';

export type HomeStackParamList = {
  HomeScreen: undefined;
  DetailCategory: undefined;
};
export type MainStackParamList = {
  GetStarted: undefined;
  MainStack: BottomTabScreenProps<BottomTabNavigatorParamList>;
  DetailTour: undefined;
};

export type BottomTabNavigatorParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  BookingScreen: undefined;
  SearchScreen: undefined;
  FavoriteScreen: undefined;
  SettingsScreen: undefined;
};
