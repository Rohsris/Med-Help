import { StyleSheet, Text, View, SafeAreaView, Image, StatusBar } from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
          navigation.replace('GetStarted');
        }, 3000);
      }, []);
  return (
    <View className="flex-1 justify-center items-center bg-white">
        <StatusBar backgroundColor={'transparent'} hidden/>
       <Image source={require('../../assets/images/splash-logo.png')} className="h-40 w-40  absolute"/>
    </View>
  )
}

export default Splash;
