import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, ImageBackground, Pressable } from 'react-native';
import { View, StyleSheet, Text } from 'react-native';

import routes from '../common/routes';
import styles from '../../styles';

const Home = ({ navigation }) => {


    return (

        <ImageBackground
            source={require('../assets/top-view-desk-office-with-opened-notebook.jpg')}
            style={styles.imageBackground}
        >

            <Text style={styles.welcome}>Welcome Heroes Of The Future!</Text>

            <Pressable
                onPress={() => {
                    navigation.navigate(routes.users);
                }}
                style={styles.gotouserbtn}
            >
                <Text style={styles.gotouser} >Go to users page</Text>
            </Pressable>
        </ImageBackground>






    );
}



export default Home;
