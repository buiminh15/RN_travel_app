import React from 'react';
import {FlatList, ImageBackground, Text, View, Pressable} from 'react-native';
import {
  DetailTourFooterFlatList,
  DetailTourHeaderFlatList,
  IconWithOverlay,
} from '../components';
import {FACILITIES, images} from '../constants';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import {FacilityItemType} from '../types/data';
import FacilityItem from '../components/FacilityItem';

const renderFacilityItem = ({item}: {item: FacilityItemType}) => {
  return <FacilityItem item={item} />;
};

const renderItem = () => {
  return (
    <FlatList
      data={FACILITIES}
      keyExtractor={item => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={renderFacilityItem}
    />
  );
};

const DetailTour = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={images.bannerBg}
      className="w-full h-full object-cover justify-end">
      <View className="absolute top-8 left-5">
        <IconWithOverlay
          iconName="chevron-left"
          colorIcon="#000"
          onPress={() => navigation.goBack()}
        />
      </View>

      <View className="h-2/3 bg-white rounded-tr-3xl rounded-tl-3xl px-5 pt-8">
        <View className="absolute -top-2 right-6 shadow-lg shadow-blue-700 bg-blue-700 px-2 py-1 rounded-lg">
          <Text className="text-white font-semibold">$1200 / night</Text>
        </View>
        <FlatList
          data={[FACILITIES[0]]}
          showsVerticalScrollIndicator={false}
          className="pb-10"
          keyExtractor={item => item.id}
          ListHeaderComponent={<DetailTourHeaderFlatList />}
          ListFooterComponent={<DetailTourFooterFlatList />}
          renderItem={renderItem}
        />
      </View>

      <View className="bg-[#0b182b] absolute w-full h-20 rounded-[30px] bottom-3 flex-row items-center justify-between px-6">
        <View className="flex-row">
          <FastImage
            source={images.profile3}
            className="w-14 aspect-square rounded-full border-2 border-white -mr-4"
          />
          <FastImage
            source={images.profile3}
            className="w-14 aspect-square rounded-full border-2 border-white -mr-4"
          />
          <FastImage
            source={images.profile3}
            className="w-14 aspect-square rounded-full border-2 border-white -mr-4"
          />
          <View className="w-14 aspect-square rounded-full border-2 border-white bg-blue-900 -mr-4 items-center justify-center">
            <Text className="text-white font-bold">+15</Text>
          </View>
        </View>
        <Pressable className="bg-white h-14 items-center justify-center px-4 rounded-xl">
          <Text className="text-blue-950 font-bold">Book Now</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default DetailTour;
