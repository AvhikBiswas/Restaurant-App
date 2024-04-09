import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

interface Props {
  selectedSection: string;
  handleSectionChange: (section: string) => void;
}

const SectionTitle: React.FC<Props> = ({ selectedSection, handleSectionChange }) => {
  const screenWidth = Dimensions.get('window').width;
  const buttonWidth = screenWidth / 2;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.buttonContainer, { width: buttonWidth }]}
        onPress={() => handleSectionChange('Restaurant')}
      >
        <Text
          style={[
            styles.heroTitle,
            selectedSection === 'Restaurant' && styles.selected,
          ]}
        >
          Restaurant
        </Text>
        {selectedSection === 'Restaurant' && <View style={styles.barLeft} />}
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.buttonContainer, { width: buttonWidth, paddingRight: 10 }]} // Add paddingRight for the Cooking section
        onPress={() => handleSectionChange('Cooking')}
      >
        <Text
          style={[
            styles.heroTitle,
            selectedSection === 'Cooking' && styles.selected,
          ]}
        >
          Cooking
        </Text>
        {selectedSection === 'Cooking' && <View style={styles.barRight} />}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40, // Adjust as needed
  },
  heroTitle: {
    fontSize: 25,
    color: 'black',
  },
  selected: {
    fontWeight: 'bold',
  },
  barLeft: {
    height: 5,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    width: '100%',
    backgroundColor: 'black',
  },
  barRight:{
    height: 5,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    width: '100%',
    backgroundColor: 'black',
  }
});

export default SectionTitle;
