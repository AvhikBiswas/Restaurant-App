import React from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Touchable,
  Button,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the FontAwesome icon set

interface Props {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
}

const SearchBar: React.FC<Props> = ({
  searchText,
  setSearchText,
  handleSearch,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search..."
          onChangeText={setSearchText}
          value={searchText}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity>
          <Icon name="filter" size={20} color="black" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 7,
  },
  input: {
    flex: 1,
    height: '100%',
    marginLeft: 5,
  },
  icon: {
    marginRight: 10,
    marginStart:10
  },
});

export default SearchBar;
