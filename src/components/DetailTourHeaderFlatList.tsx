import {View, Text} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-eva-icons';

const DetailTourHeaderFlatList = () => {
  return (
    <View className="mb-5">
      <Text className="text-3xl font-extrabold">Dream Beach</Text>
      <View className="flex-row gap-2 items-center">
        <Icon name="pin-outline" width={24} height={24} fill={'#a3b4cc'} />
        <Text className="text-base  text-slate-400">Jakarta, Indonesia</Text>
      </View>
    </View>
  );
};

export default DetailTourHeaderFlatList;
