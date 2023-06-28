import {View, Text} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-eva-icons';
import StarRating from 'react-native-star-rating-widget';

const DetailTourHeaderFlatList = () => {
  return (
    <View className="mb-5">
      <StarRating
        rating={3.5}
        onChange={() => console.log('test')}
        starSize={24}
        color="#2d3be9"
      />
      <Text className="text-3xl font-extrabold">Dream Beach</Text>
      <View className="flex-row gap-2 items-center">
        <Icon name="pin-outline" width={20} height={24} fill={'#a3b4cc'} />
        <Text className="text-lg  text-slate-400">Jakarta, Indonesia</Text>
      </View>
    </View>
  );
};

export default DetailTourHeaderFlatList;
