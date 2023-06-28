import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import MainStack from './MainStack';

const RootNavigator = () => {
  return (
    <SafeAreaView className="flex-1">
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default RootNavigator;
