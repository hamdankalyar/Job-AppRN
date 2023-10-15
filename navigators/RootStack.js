import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import share from '../assets/icons/share.png'
import { COLORS, SIZES, icons, images } from '../constants';
import ScreenHeaderBtn from '../components/header/ScreenHeaderBtn';

import Main from '../Main';
import JobDetails from '../screens/JobDetails';
import JobSearch from '../screens/Search';

const Stack = createNativeStackNavigator(); 
const RootStack = () => {

  return (
    <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}>

    <NavigationContainer>
    <Stack.Navigator
  
    
    >
      <Stack.Screen
        name='Home'
        component={Main}
        options={{
          headerTitle:'',
      headerStyle:{backgroundColor:COLORS.lightWhite},
      headerShadowVisible:false,
      headerLeft:()=>(

        <ScreenHeaderBtn iconURL={icons.menu} dimension="60%" /> 
      )
      ,
      headerRight:()=>(
        <ScreenHeaderBtn iconURL={images.profile} dimension="100%" /> 

      )
    }}
      />
      <Stack.Screen
        name='JobDetails'
        component={JobDetails}
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          
          // headerLeft: () => (
          //   <ScreenHeaderBtn
          //     iconUrl={icons.left}
          //     dimension='60%'
          //   />
          // ),
          // headerRight: () => (
          //   <ScreenHeaderBtn 
          //   iconUrl={icons.share} 
          //   dimension='60%' />
          // ),
          headerTitle: "",
        }}
      />
      <Stack.Screen
      name='search'
      component={JobSearch}
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    // headerLeft: () => (
                    //     <ScreenHeaderBtn
                    //         iconUrl={icons.left}
                    //         dimension='60%'
                    //         handlePress={() => router.back()}
                    //     />
                    // ),
                    headerTitle: "",
                }}
            />
    </Stack.Navigator>
  </NavigationContainer>
  </SafeAreaView>
  )
}

export default RootStack

const styles = StyleSheet.create({})