import { useRoute } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { usersContext } from '../contexts/usersContextProvider';
import styles from '../../styles';
import { Center } from 'native-base';

const Details = () => {
    const { params } = useRoute()
    const [user, setUser] = useState({})

    const { users } = useContext(usersContext);
    useEffect(() => {
        setUser(users.filter((obj) => obj.id === params)[0])
    }, [])
    return (
        <ImageBackground source={require('../assets/top-view-desk-office-with-opened-notebook.jpg')}
            style={styles.imageBackground}
        >
            <View style={{ justifyContent: "center" }}>

                <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: "center" }} > User Details</Text>
                <Image
                    source={require('../assets/successful-college-student-lg.png')}
                    style={{
                        width: 300,
                        height: 200,
                        marginLeft: 45,
                        marginBottom: 10,
                    }}
                />
                <Text style={{
                    fontSize: 18,
                    marginBottom: 5,
                    fontStyle: 'italic', textAlign: "center", marginTop: "100", fontWeight: '500'
                }} > Name: {user.name}</Text>
                <Text style={{
                    fontSize: 18,
                    marginBottom: 5,
                    fontStyle: 'italic', textAlign: "center", marginTop: "200", fontWeight: '500', padding: 10
                }} > Email: {user.email}</Text>

            </View>
        </ImageBackground>
    );
};


export default Details;
