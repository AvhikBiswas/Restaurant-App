import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const FilterModel = () => {
  const [selectedDiet, setSelectedDiet] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [selectedProtein, setSelectedProtein] = useState('');

  const handleDietSelect = (filter: any) => {
    setSelectedDiet(prevSelected => (prevSelected === filter ? '' : filter));
  };

  const handleCuisineSelect = (filter: any) => {
    setSelectedCuisine(prevSelected => (prevSelected === filter ? '' : filter));
  };

  const handleProteinSelect = (filter: any) => {
    setSelectedProtein(prevSelected => (prevSelected === filter ? '' : filter));
  };
  const navigation: any = useNavigation();

  const applyFilter = () => {
    let updatedSelectedDiet = selectedDiet; // Initialize with the current selectedDiet
  
    if (selectedDiet === "Vegetarian") {
      updatedSelectedDiet = "Veg";
    } else if (selectedDiet === "Non-Vegetarian") {
      updatedSelectedDiet = "Non-Veg";
    }
  
    navigation.navigate('FilterData', {
      filterData: {
        selectedDiet: updatedSelectedDiet,
        selectedCuisine,
        selectedProtein
      },
    });
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heroTitle}>Filter</Text>
      </View>
      <View style={styles.filterSection}>
        <Text style={styles.filterTitle}>Diet</Text>
        <View style={styles.filterOptionContainer}>
          <TouchableOpacity
            style={[
              styles.filterOption,
              selectedDiet === 'Vegetarian' && {backgroundColor: 'black'},
            ]}
            onPress={() => handleDietSelect('Vegetarian')}>
            <Text
              style={[
                styles.filterOptionText,
                selectedDiet === 'Vegetarian' && {color: 'white'},
              ]}>
              Vegetarian
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterOption,
              selectedDiet === 'Non-Vegetarian' && {backgroundColor: 'black'},
            ]}
            onPress={() => handleDietSelect('Non-Vegetarian')}>
            <Text
              style={[
                styles.filterOptionText,
                selectedDiet === 'Non-Vegetarian' && {color: 'white'},
              ]}>
              Non-Vegetarian
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterOption,
              selectedDiet === 'Vegan' && {backgroundColor: 'black'},
            ]}
            onPress={() => handleDietSelect('Vegan')}>
            <Text
              style={[
                styles.filterOptionText,
                selectedDiet === 'Vegan' && {color: 'white'},
              ]}>
              Vegan
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.filterSection}>
        <Text style={styles.filterTitle}>Cuisines</Text>
        <View style={styles.filterOptionContainer}>
          <TouchableOpacity
            style={[
              styles.filterOption,
              selectedCuisine === 'Indian' && {backgroundColor: 'black'},
            ]}
            onPress={() => handleCuisineSelect('Indian')}>
            <Text
              style={[
                styles.filterOptionText,
                selectedCuisine === 'Indian' && {color: 'white'},
              ]}>
              Indian
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterOption,
              selectedCuisine === 'Mediterranean' && {backgroundColor: 'black'},
            ]}
            onPress={() => handleCuisineSelect('Mediterranean')}>
            <Text
              style={[
                styles.filterOptionText,
                selectedCuisine === 'Mediterranean' && {color: 'white'},
              ]}>
              Mediterranean
            </Text>
          </TouchableOpacity>
          {/* Add more cuisine options here */}
        </View>
      </View>
      <View style={styles.filterSection}>
        <Text style={styles.filterTitle}>Proteins</Text>
        <View style={styles.filterOptionContainer}>
          <TouchableOpacity
            style={[
              styles.filterOption,
              selectedProtein === 'Chicken' && {backgroundColor: 'black'},
            ]}
            onPress={() => handleProteinSelect('Chicken')}>
            <Text
              style={[
                styles.filterOptionText,
                selectedProtein === 'Chicken' && {color: 'white'},
              ]}>
              Chicken
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterOption,
              selectedProtein === 'Beef' && {backgroundColor: 'black'},
            ]}
            onPress={() => handleProteinSelect('Beef')}>
            <Text
              style={[
                styles.filterOptionText,
                selectedProtein === 'Beef' && {color: 'white'},
              ]}>
              Beef
            </Text>
          </TouchableOpacity>
          {/* Add more protein options here */}
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={[styles.button]}>
          <Text style={[styles.buttonText, styles.cancelButtonText]}>
            Cancel
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={applyFilter}
          style={[styles.button, styles.applyButton, {width: '70%'}]}>
          <Text style={[styles.buttonText, styles.applyButtonText]}>
            Apply Filter
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  heroTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#4a4a4a',
    marginBottom: 10,
  },
  filterSection: {
    marginBottom: 20,
    marginTop: 10,
  },
  filterTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4a4a4a',
    marginBottom: 10,
  },
  filterOptionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  filterOption: {
    backgroundColor: '#EDEDED',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  filterOptionText: {
    fontSize: 16,
    color: '#4a4a4a',
  },
  buttonContainer: {
    borderTopWidth: 1,
    borderTopColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  button: {
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  applyButton: {
    backgroundColor: 'black',
  },
  buttonText: {
    fontSize: 20,
  },
  cancelButtonText: {
    color: '#4a4a4a',
  },
  applyButtonText: {
    color: '#FFFFFF',
  },
});

export default FilterModel;
