import React, { useState, useContext } from 'react';
import { View, TextInput, FlatList, StyleSheet } from 'react-native';
import { usersContext } from '../contexts/usersContextProvider';

const Search = () => {
  const { users } = useContext(usersContext);
  const [searchText, setSearchText] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleSearch = text => {
    setSearchText(text);

    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(text.toLowerCase())
    );

    setFilteredUsers(filtered);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search by name"
        value={searchText}
        onChangeText={handleSearch}
      />

      <FlatList
        data={searchText ? filteredUsers : users}
        keyExtractor={user => user.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.userItem}>
            {/* Display user details here */}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  userItem: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    elevation: 2,
  },
});

export default Search;
