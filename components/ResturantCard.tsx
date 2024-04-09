import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const RestaurantItem = ({ restaurant }: { restaurant: any }) => {
  return (
    <View style={styles.restaurantItem}>
      <ImageBackground source={{ uri: restaurant.image }} style={styles.restaurantImage}>
        <View style={styles.overlay}>
          <Text style={styles.restaurantName}>{restaurant.name}</Text>
          <Text style={styles.restaurantDetails}>{restaurant.type} | {restaurant.cuisine}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  restaurantItem: {
    width: 150, 
    height: 200,
    borderRadius: 10,
    marginRight: 10,
    overflow: 'hidden',
  },
  restaurantImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    borderRadius: 10,
    padding:10,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  restaurantDetails: {
    fontSize: 16,
    color: 'white',
  },
});

export default RestaurantItem;
