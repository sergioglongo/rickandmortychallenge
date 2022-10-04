import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import { Characters } from '../interfaces/characterInterface';
import CharacterScreen from '../screens/CharacterScreen';
import LoginScreen from '../screens/LoginScreen';
import { AuthContext } from '../contexts/AuthContext';
import { LoadingScreen } from '../screens/LoadingScreen';

// Argumentos que va a recibir cada Screen
export type RootStackParams = {
  LoginScreen: undefined,
  HomeScreen: undefined,
  SearchScreen: undefined,
  CharacterScreen: { character: Characters, color: string },
}
//incluyo el type de Screens para avisar a las Screens que paramentros deben recibir
const Stack = createStackNavigator<RootStackParams>();

function NavigationStack() {
  const { status } = useContext(AuthContext);
  console.log("Estado al iniciar",status);
  
  if (status === 'checking') return <LoadingScreen />

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        title: 'Ricky & Morty',
        cardStyle: {
          backgroundColor: 'white'
        }
      }}>
      {
        (status !== 'authenticated')
          ? (
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
          ) :
          (<>
            <Stack.Screen name="SearchScreen" component={SearchScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="CharacterScreen" component={CharacterScreen} />
          </>)}
    </Stack.Navigator>
  );
}

export default NavigationStack