import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import VerticalView from '../components/VerticalView';
import restaurants from '../Constants/allResturants';

function FillterdDataScreen({ route }:any) {
  const { selectedDiet, selectedCuisine, selectedProtein } = route.params.filterData;

  const filteredRestaurants = restaurants.filter(restaurant => {
    if (selectedDiet && restaurant.type !== selectedDiet) {
      return false;
    }
    if (selectedCuisine && restaurant.cuisine !== selectedCuisine) {
      return false;
    }
    if (selectedProtein && restaurant.FoodType !== selectedProtein) {
      return false;
    }
    return true; 
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}>
        <VerticalView restaurants={filteredRestaurants} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
});

export default FillterdDataScreen;
