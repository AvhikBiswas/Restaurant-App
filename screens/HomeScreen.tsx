import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';
import SectionTitle from '../components/SectionTitle';
import RestaurantList from '../components/RestaurantList';
import SearchBar from '../components/SearchBar';
import restaurants from '../Constants/allResturants';

const HomeScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedSection, setSelectedSection] = useState('Restaurant');

  const handleSearch = () => {
    console.log('Searched text:', searchText);
  };

  const handleSectionChange = (section: string) => {
    setSelectedSection(section);
  };

  
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
