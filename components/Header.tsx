import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.greetingText}>Good Morning</Text>
      <Text style={styles.nameText}>Mr.Joe!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default Header;
