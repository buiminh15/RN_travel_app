import React from 'react';
import {Pressable, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {images} from '../constants';
import {useNavigation} from '@react-navigation/native';

const GetStartedScreen = () => {
  const {navigate} = useNavigation();
  return (
    <View>
      <FastImage
        className="w-full h-full "
        source={images.bannerBg}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View className="absolute inset-0 bg-slate-500/30 w-full h-full" />
      <View className="absolute h-1/2 bg-white bottom-10 left-4 right-4 rounded-3xl shadow-lg px-10 py-10 justify-between">
        <View className="gap-4">
          <Text className="text-[38px] text-blue-950 font-bold">
            Discover best places anywhere in the world
          </Text>
          <Text className="text-base text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            voluptate aliquid, dolor illo dolore fugiat
          </Text>
        </View>

        <Pressable
          className="bg-blue-950 rounded-xl py-3"
          onPress={() => navigate('MainStack' as never)}>
          <Text className="text-white text-center font-bold">Get Started</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default GetStartedScreen;
