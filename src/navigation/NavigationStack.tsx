import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import { Characters } from '../interfaces/characterInterface';
import CharacterScreen from '../screens/CharacterScreen';
import LoginScreen from '../screens/LoginScreen';
// Argumentos que va a recibir cada Screen
export type RootStackParams =  {
  LoginScreen: undefined,
  HomeScreen: undefined,
  CharacterScreen: {character: Characters, color: string},
  SearchScreen:undefined,
}
//incluyo el type de Screens para avisar a las Screens que paramentros deben recibir
const Stack = createStackNavigator<RootStackParams>();

function NavigationStack() {
  return (
    <Stack.Navigator 
    screenOptions={{
        headerShown: false,
        title:'Ricky & Morty',
        cardStyle:{
          backgroundColor:'white'
        }
    }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CharacterScreen" component={CharacterScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
    </Stack.Navigator>
  );
}

export default NavigationStack