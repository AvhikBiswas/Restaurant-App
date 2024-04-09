import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import RestaurantItem from '../components/ResturantCard';

const HomeScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedSection, setSelectedSection] = useState('Restaurant');

  const handleSearch = () => {
    console.log('Searched text:', searchText);
  };

  const handleSectionChange = (section: any) => {
    setSelectedSection(section);
  };

  const restaurants = [
    {
      id: 1,
      name: 'Green Garden',
      type: 'Veg',
      Location: 'Haber Field',
      cuisine: 'Indian',
      FoodType: 'Meat',
      image:
        'https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-101282760/101282760.jpg', // Use actual image URLs here
    },
    {
      id: 2,
      name: 'Spice Delight',
      Location: 'Haber Field',
      type: 'Non-Veg',
      FoodType: 'Meat',
      cuisine: 'Indian',
      image:
        'https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-101282760/101282760.jpg', // Use actual image URLs here
    },
    {
      id: 3,
      name: 'Second Wife',
      Location: 'Haber Field',
      type: 'Veg',
      FoodType: 'Meat',
      cuisine: 'Indian',
      image:
        'https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-101282760/101282760.jpg', // Use actual image URLs here
    },
    // Add more restaurants as needed
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greetingText}>Good Morning</Text>
        <Text style={styles.nameText}>Mr.Joe!</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          onChangeText={setSearchText}
          value={searchText}
          onSubmitEditing={handleSearch}
        />
      </View>
      <View style={styles.section}>
        <TouchableOpacity onPress={() => handleSectionChange('Restaurant')}>
          <Text
            style={[
              styles.heroTitle,
              selectedSection === 'Restaurant' && styles.selected,
            ]}>
            Restaurant
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSectionChange('Cooking')}>
          <Text
            style={[
              styles.heroTitle,
              selectedSection === 'Cooking' && styles.selected,
            ]}>
            Cooking
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.HeroBar} />
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
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}>
        {restaurants.map(restaurant => (
          <RestaurantItem key={restaurant.id} restaurant={restaurant} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  header: {
    marginBottom: 20,
    marginTop: 30,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  greetingText: {
    fontSize: 20,
    color: 'black',
  },
  nameText: {
    fontSize: 20,
    color: 'black',
  },
  HeroBar: {
    width: '40%',
    height: 5,
    borderTopLeftRadius: 50,
    backgroundColor: 'black',
    marginBottom: 10,
  },
  searchContainer: {
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 10,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  CartSection: {
    flex: 1,
    paddingLeft: 10,
    flexDirection: 'column',
  },
  sectionTitle: {
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10,
    color: 'black',
  },
  sectionText: {
    fontSize: 16,
    paddingLeft: 10,
  },
  viewAllButton: {
    padding: 10,
    alignSelf: 'flex-start',
  },
  viewAllText: {
    color: 'black',
  },
  scrollViewContent: {
    // paddingBottom: 10,
  },
  heroTitle: {
    fontSize: 20,
    color: 'black',
    paddingLeft:10,
    
  },
  selected: {
    fontWeight: 'bold',
    color: 'black',
  },
});

export default HomeScreen;
