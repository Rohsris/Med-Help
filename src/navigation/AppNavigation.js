import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home'
import Splash from '../screens/Splash'
import Login from '../screens/Login'
import Register from '../screens/Register'
import GetStarted from '../screens/GetStarted'

const Stack = createNativeStackNavigator();

function AppNavigation () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown: false}} >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="GetStarted" component={GetStarted} />
        {/* <Stack.Screen name="Home" component={Home} /> */}
        {/* <Stack.Screen name="Login" component={Login} /> */}
        {/* <Stack.Screen name="Register" component={Register} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation;