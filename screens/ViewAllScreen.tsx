import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import RestaurantList from '../components/RestaurantList';
import restaurants from '../Constants/allResturants';
import VerticalView from '../components/VerticalView';

export default function ViewAllScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}>
        <VerticalView restaurants={restaurants} />
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
