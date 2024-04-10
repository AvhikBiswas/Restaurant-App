import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import RestaurantItem from './ResturantCard';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign'; // Import Icon component

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

const VerticalView: React.FC<Props> = ({restaurants}) => {
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="arrowleft"
          size={25}
          color="black"
          onPress={() => navigation.navigate('Home')}
        />
        <Text style={styles.headerTitle}>Satisfy Your Cravings</Text>
      </View>
      <ScrollView
      showsHorizontalScrollIndicator={false}
       showsVerticalScrollIndicator={false} 
        contentContainerStyle={styles.scrollViewContent}>
        {restaurants.map((restaurant: Restaurant) => (
          <RestaurantItem key={restaurant.id} restaurant={restaurant} isVertical={true}/>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    color: 'black',
    marginLeft: 10,
  },
  scrollViewContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 20, 
  },
  viewAllButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  viewAllText: {
    fontSize: 16,
    color: 'white',
  },
});

export default VerticalView;
