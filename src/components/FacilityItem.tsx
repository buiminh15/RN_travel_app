import {View, Text} from 'react-native';
import React from 'react';
import {FacilityItemType} from '../types/data';

const FacilityItem = ({item}: {item: FacilityItemType}) => {
  return (
    <View className="px-5 py-3 bg-slate-300 mr-4 rounded-lg">
      <Text className="text-slate-700 font-bold rounded-lg">{item.name}</Text>
    </View>
  );
};

export default FacilityItem;
