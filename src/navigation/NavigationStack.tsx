import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';

const Stack = createStackNavigator();

function NavigationStack() {
  return (
    <Stack.Navigator 
    screenOptions={{
        // headerShown: false,
        title:'Ricky & Morty',
        cardStyle:{
          backgroundColor:'white'
        }
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
}

export default NavigationStack