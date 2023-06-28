import {View, Text, TextInput} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {images} from '../constants';
import {Icon} from 'react-native-eva-icons';
import IconWithOverlay from './common/IconWithOverlay';

const HomeHeaderFlatList = () => {
  return (
    <View className="gap-10 mb-6">
      <View className="flex-row items-center justify-between">
        <View className="">
          <Text className="text-3xl font-bold text-blue-950">Hi, Malinda</Text>
          <View className="flex-row gap-2 items-center">
            <Icon name="pin-outline" width={24} height={24} fill={'#a3b4cc'} />
            <Text className="text-base  text-slate-400">
              Jakarta, Indonesia
            </Text>
          </View>
        </View>

        <View className="flex-row items-center gap-5">
          <IconWithOverlay iconName="bell" colorIcon="#0b182b" />
          <FastImage
            className="w-16 h-16 rounded-full border-4 border-blue-700"
            source={images.profile1}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
      </View>

      <View className="flex-row items-center gap-2 shadow-black shadow-2xl bg-white rounded-xl px-4 ">
        <Icon name="search-outline" width={24} height={24} fill={'#a3b4cc'} />
        <TextInput
          placeholder="Search for places..."
          placeholderTextColor={'#a3b4cc'}
        />
      </View>
    </View>
  );
};

export default HomeHeaderFlatList;
