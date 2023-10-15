import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

import React, { useCallback, useEffect, useState } from 'react';

import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import RootStack from './navigators/RootStack';
const Stack = createNativeStackNavigator(); 




export default function App() {
 
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          DMBold: require('./assets/fonts/DMSans-Bold.ttf'),
          DMMedium: require('./assets/fonts/DMSans-Medium.ttf'),
          DMRegular: require('./assets/fonts/DMSans-Regular.ttf')
        });
        setAppIsReady(true);
      } catch (e) {
        console.warn(e);
      }
    }

    prepare();
  }, []);

  if (!appIsReady) {
    return null;
  }


  return (
   
    <RootStack/>
 


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
