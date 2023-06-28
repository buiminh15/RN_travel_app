import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {CategoryType} from '../types/data';

const CategoryItem = ({item}: {item: CategoryType}) => {
  const navigation = useNavigation();
  return (
    <View className="items-center gap-3 mr-5">
      <TouchableOpacity
        className="w-20 aspect-square shadow-lg shadow-black rounded-full items-center justify-center bg-blue-700"
        onPress={() => navigation.navigate('DetailCategory' as never)}>
        {item.icon}
      </TouchableOpacity>
      <Text className="text-blue-950 text-base font-semibold">{item.name}</Text>
    </View>
  );
};

export default CategoryItem;
