
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface Props {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
}

const SearchBar: React.FC<Props> = ({ searchText, setSearchText, handleSearch }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder="Search..."
      onChangeText={setSearchText}
      value={searchText}
      onSubmitEditing={handleSearch}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 7,
  },
});

export default SearchBar;
