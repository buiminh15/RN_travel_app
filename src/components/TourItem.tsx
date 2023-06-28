import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-eva-icons';
import FastImage from 'react-native-fast-image';
import {images} from '../constants';
import {TourType} from '../types/data';
import IconWithOverlay from './common/IconWithOverlay';

const TourItem = ({item}: {item: TourType}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className="w-56 h-80 shadow-md overflow-hidden rounded-3xl bg-white mr-5"
      onPress={() => navigation.navigate('DetailTour' as never)}>
      <View className="h-2/3">
        <FastImage
          source={item.bgImage}
          className="w-full h-full object-cover bg-blue rounded-3xl"
        />
        <View className="absolute top-4 right-4">
          <IconWithOverlay
            iconName="heart"
            shape="rounded-2xl"
            colorIcon="red"
          />
        </View>
        <View className="absolute px-3 py-1 -bottom-2 left-4 bg-blue-600 rounded">
          <Text className="text-white uppercase font-bold">Hot</Text>
        </View>
      </View>

      <View className="p-3 flex-1 justify-between">
        <Text className="text-blue-950 text-xl font-semibold">{item.name}</Text>
        <View className="flex-row items-center justify-between">
          <View className="flex-row">
            <FastImage
              source={images.profile2}
              className="h-8 rounded-full aspect-square"
            />
            <FastImage
              source={images.profile3}
              className="h-8 rounded-full aspect-square -ml-2"
            />
            <FastImage
              source={images.profile4}
              className="h-8 rounded-full aspect-square -ml-2"
            />
            <View className="h-8 aspect-square rounded-full items-center justify-center -ml-2 bg-blue-500">
              <Icon
                name="more-horizontal"
                height={20}
                width={20}
                fill={'white'}
              />
            </View>
          </View>
          <Text className="text-slate-400">{item.distance}km</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TourItem;
