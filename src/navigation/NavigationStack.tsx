import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import { Characters } from '../interfaces/characterInterface';
import CharacterScreen from '../screens/CharacterScreen';
// Argumentos que va a recibir cada Screen
export type RootStackParams =  {
  HomeScreen: undefined,
  CharacterScreen: {character: Characters, color: string}
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
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CharacterScreen" component={CharacterScreen} />
    </Stack.Navigator>
  );
}

export default NavigationStack