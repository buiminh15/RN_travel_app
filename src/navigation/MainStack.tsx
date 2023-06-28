import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {DetailTour, GetStartedScreen} from '../screens';
import {MainStackParamList} from '../types/navigation';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="GetStarted" component={GetStartedScreen} />
      <Stack.Screen name="MainStack" component={BottomTabNavigator} />
      <Stack.Screen name="DetailTour" component={DetailTour} />
    </Stack.Navigator>
  );
};

export default MainStack;
