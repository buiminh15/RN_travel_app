import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {CategoryItem, HomeHeaderFlatList, TourItem} from '../components';
import {DATA} from '../constants';
import {CategoryType, DataType, TourType} from '../types/data';

const renderCategoryItem = ({item}: {item: CategoryType}) => {
  return <CategoryItem item={item} />;
};

const renderTourItem = ({item}: {item: TourType}) => {
  return <TourItem item={item} />;
};

const renderItem = ({item}: {item: DataType}) => {
  return (
    <View className="mb-10">
      <View className="flex-row items-center justify-between mb-2">
        <Text className="text-xl font-bold text-blue-950 ">{item.title}</Text>
        <TouchableOpacity>
          <Text className="text-blue-600 font-semibold">View all</Text>
        </TouchableOpacity>
      </View>
      {item.title === 'Categories' && (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={item.data as CategoryType[]}
          renderItem={renderCategoryItem}
        />
      )}
      {item.title === 'Tours' && (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={item.data as TourType[]}
          renderItem={renderTourItem}
        />
      )}
    </View>
  );
};

const HomeScreen = () => {
  return (
    <View className="flex-1 px-5 pt-4">
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListHeaderComponent={<HomeHeaderFlatList />}
        ListFooterComponent={<View className="pb-20" />}
      />
    </View>
  );
};

export default HomeScreen;
