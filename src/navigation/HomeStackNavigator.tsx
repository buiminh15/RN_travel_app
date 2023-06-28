import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {DetailCategory, HomeScreen} from '../screens';
import {HomeStackParamList} from '../types/navigation';
const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="DetailCategory" component={DetailCategory} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
