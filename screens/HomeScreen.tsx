import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';
import SectionTitle from '../components/SectionTitle';
import RestaurantList from '../components/RestaurantList';
import SearchBar from '../components/SearchBar';

const HomeScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedSection, setSelectedSection] = useState('Restaurant');

  const handleSearch = () => {
    console.log('Searched text:', searchText);
  };

  const handleSectionChange = (section: string) => {
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
      <Header />
      <View style={styles.searchContainer}>
        <SearchBar
          searchText={searchText}
          setSearchText={setSearchText}
          handleSearch={handleSearch}
        />
      </View>
      <SectionTitle
        selectedSection={selectedSection}
        handleSectionChange={handleSectionChange}
      />
      <ScrollView showsVerticalScrollIndicator={false} style={{width:"100%",height:"100%"}}>
        <RestaurantList restaurants={restaurants}  />
        <RestaurantList restaurants={restaurants}  />
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
  searchContainer: {
    marginBottom: 20,
  },
});

export default HomeScreen;
