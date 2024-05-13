import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, ImageBackground, TextInput } from 'react-native';
import styles from "../../styles";
import { useNavigation } from '@react-navigation/native';
import routes from '../common/routes';
import { usersContext } from '../contexts/usersContextProvider';

const Users = () => {
    const { navigate } = useNavigation();
    const { users } = useContext(usersContext);

    const [searchText, setSearchText] = useState('');
    const [filteredUsers, setFilteredUsers] = useState(users);

    useEffect(() => {
        const filtered = users.filter(user =>
            user.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredUsers(filtered);
    }, [searchText, users]);

    return (
        <ImageBackground
            source={require('../assets/top-view-desk-office-with-opened-notebook.jpg')}
            style={styles.imageBackground}
        >
            <TextInput
                style={styles.input}
                placeholder="Search by name"
                value={searchText}
                onChangeText={setSearchText}
            />

            {filteredUsers.map(obj => (
                <View
                    key={obj.id}
                    style={{
                        flexDirection: 'row',
                        display: 'flex',
                        borderBottomWidth: 1,
                        borderColor: 'rgba(255, 255, 255, 0.5)',
                        paddingVertical: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Text style={{ fontSize: 15, fontStyle: 'italic' }} key={obj.id}>
                        {obj.name}
                    </Text>
                    <Pressable
                        style={styles.btnContainer}
                        onPress={() => navigate(routes.details, obj.id)}
                    >
                        <Text style={{ fontWeight: '600', padding: 5 }}>Show Details</Text>
                    </Pressable>
                </View>
            ))}
        </ImageBackground>
    );
};

export default Users;
