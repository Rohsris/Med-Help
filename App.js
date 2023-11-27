import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigation from './src/navigation/AppNavigation';

export default function App() {
  return (
    <AppNavigation/>
  );
}

