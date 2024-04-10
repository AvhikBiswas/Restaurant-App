import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const RestaurantItem = ({ restaurant }: { restaurant: any }) => {
  return (
    <View style={styles.restaurantItem}>
      <ImageBackground
        source={{ uri: restaurant.image }}
        style={styles.restaurantImage}
        imageStyle={styles.imageStyle} 
      >
        <View style={styles.overlay}>
          <Text style={styles.restaurantName}>{restaurant?.name}</Text>
          <Text style={styles.restaurantName}>{restaurant?.Location}</Text>
          <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
            <Text style={styles.restaurantDetails}>{restaurant?.type} | </Text>
            <Text style={styles.restaurantDetails}>{restaurant?.cuisine} | </Text>
            <Text style={styles.restaurantDetails}>{restaurant?.FoodType}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  restaurantItem: {
    width: 175,
    height: 220,
    marginRight: 10,
    paddingBottom: 5,
  },
  restaurantImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  restaurantName: {
    fontSize: 20,
    color: 'white',
    paddingBottom: 5,
  },
  restaurantDetails: {
    color: 'white',
  },
  imageStyle: {
    borderRadius: 10, // Rounded corners for the image
  },
});

export default RestaurantItem;
