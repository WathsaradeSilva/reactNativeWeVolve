 import React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import {
   SafeAreaView,
   StyleSheet,
   View,
   Text
 } from 'react-native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetectEmotion from './DetectEmotion';
import ReadPhycology from './ReadPhycology';
import EmotionsHome from './EmotionsHome';
 const HomeScreens = createNativeStackNavigator();
 
 const HomeScreen = () => {
   return (
      <HomeScreens.Navigator>
        <HomeScreens.Screen name="EmotionsHome" component={EmotionsHome} options={{ headerShown: false }}/>
        <HomeScreens.Screen name="DetectEmotion" component={DetectEmotion} options={{ headerShown: false }}/>
        <HomeScreens.Screen name="ReadPhycology" component={ReadPhycology} options={{ headerShown: false }}/>
    </HomeScreens.Navigator>

   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default HomeScreen;
 