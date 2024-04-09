import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

interface Props {
  selectedSection: string;
  handleSectionChange: (section: string) => void;
}

const SectionTitle: React.FC<Props> = ({ selectedSection, handleSectionChange }) => {
  const screenWidth = Dimensions.get('screen').width;
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
            selectedSection === 'Restaurant' && styles.selectedHeroTitle,
          ]}
        >
          Restaurant
        </Text>
        {selectedSection === 'Restaurant' && <View style={styles.barLeft} />}
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.buttonContainer, { width: buttonWidth, paddingRight: 10 }]} 
        onPress={() => handleSectionChange('Cooking')}
      >
        <Text
          style={[
            styles.heroTitle,
            selectedSection === 'Cooking' && styles.selectedHeroTitle,
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
    marginBottom:1,
    flexDirection: 'row',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  heroTitle: {
    fontSize: 25,
    color: 'black',
  },
  selectedHeroTitle: {
    fontWeight: 'bold',
  },
  barLeft: {
    height: 4,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    width: '100%',
    backgroundColor: 'black',
  },
  barRight:{
   marginRight:10,
    height: 4,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    width: '100%',
    backgroundColor: 'black',
  }
});

export default SectionTitle;