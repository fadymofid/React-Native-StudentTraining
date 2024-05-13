import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import Home from '../screens/Home';
import Users from '../screens/Users';
import routes from '../common/routes';
import Details from '../screens/Details';
const stack = createStackNavigator();
const Root = () => {
    return (

        <stack.Navigator>

            <stack.Screen name={routes.home} component={Home} options={{
                headerTitle: "Home Summer Training",

                headerStyle: { backgroundColor: "#FFE707" },
                headerTintColor: "black",
                headerTitleStyle: { fontSize: 20 },
                headerTitleAlign: "center"

            }
            }
            >

            </stack.Screen>



            <stack.Screen name={routes.users} component={Users} options={{
                headerTitle: "Users",

                headerStyle: { backgroundColor: "#FFE707" },
                headerTintColor: "black",
                headerTitleStyle: { fontSize: 20 },
                headerTitleAlign: "center"

            }
            }></stack.Screen>
            <stack.Screen name={routes.details} component={Details} options={{
                headerTitle: "Info",

                headerStyle: { backgroundColor: "#FFE707" },
                headerTintColor: "black",
                headerTitleStyle: { fontSize: 20 },
                headerTitleAlign: "center"

            }
            }></stack.Screen>

        </stack.Navigator>

    );


}

const styles = StyleSheet.create({})

export default Root;
