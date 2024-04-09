import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import RestaurantItem from './ResturantCard';

interface Restaurant {
  id: number;
  name: string;
  type: string;
  Location: string;
  cuisine: string;
  FoodType: string;
  image: string;
}

interface Props {
  restaurants: Restaurant[];
}

const RestaurantList: React.FC<Props> = ({ restaurants }) => {
  return (
    <View style={{paddingLeft: 20, paddingBottom: 20, backgroundColor: 'white', borderTopStartRadius: 20, borderBottomStartRadius: 20}}>
      <View style={styles.section}>
        <View style={styles.CartSection}>
          <Text style={styles.sectionTitle}>Satisfy Your Cravings</Text>
          <Text style={styles.sectionText}>
            Restaurants that suit your palate
          </Text>
        </View>
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 10}}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}>
          {restaurants.map((restaurant: Restaurant) => (
            <RestaurantItem key={restaurant.id} restaurant={restaurant} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Align items to center vertically
  },
  CartSection: {
    flex: 1,
    paddingLeft: 10,
    marginTop: 20,
    flexDirection: 'column',
  },
  sectionTitle: {
    fontSize: 20,
    color: 'black',
  },
  sectionText: {
    fontSize: 16,
  },
  viewAllButton: {
    padding: 10,
    alignSelf: 'flex-end', // Align button to the end of the row
  },
  viewAllText: {
    fontSize: 17,
    color: 'black',
  },
  scrollViewContent: {
    // paddingBottom: 10,
  },
});

export default RestaurantList;
