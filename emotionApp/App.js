import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  StyleSheet,
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from './screens/HomeScreen';
import HistoryScreen from './screens/HistoryScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();


const TabNavigator = () => {
  return(<Tab.Navigator>
  <Tab.Screen name="Home" component={HomeScreen} />
  <Tab.Screen name="History" component={HistoryScreen} />
</Tab.Navigator>)
}

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="WeVolve" component={TabNavigator} />
    </Stack.Navigator>
    </NavigationContainer>
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

export default App;
