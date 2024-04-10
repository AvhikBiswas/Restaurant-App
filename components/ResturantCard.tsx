import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const RestaurantItem = ({
  restaurant,
  isVertical,
}: {
  restaurant: any;
  isVertical: boolean;
}) => {
  return (
    <View
      style={[styles.restaurantItem, !isVertical && styles.withMarginRight]}>
      <ImageBackground
        source={{uri: restaurant.image}}
        style={styles.restaurantImage}
        imageStyle={styles.imageStyle}>
        <View style={styles.overlay}>
          <View style={{flex:1,flexDirection:"row"}}>
            <Icon style={{alignItems:"flex-start"}} name="bookmark-outline" size={30} color={'red'} />
            <Icon style={{alignItems:"flex-end"}} name="heart-circle-sharp" size={30} color={'red'} />
          </View>
          <Text style={styles.restaurantName}>{restaurant?.name}</Text>
          <Text style={styles.restaurantName}>{restaurant?.Location}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}>
            <Text style={styles.restaurantDetails}>{restaurant?.type} | </Text>
            <Text style={styles.restaurantDetails}>
              {restaurant?.cuisine} |{' '}
            </Text>
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
    padding: 5,
    // marginBottom:10
  },
  withMarginRight: {
    marginRight: 10,
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
