import React, { useContext ,useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen'
import SearchScreen from '../screens/SearchScreen';
import { Characters } from '../interfaces/characterInterface';
import CharacterScreen from '../screens/CharacterScreen';
import LoginScreen from '../screens/LoginScreen';
import { AuthContext } from '../contexts/AuthContext';
import { LoadingScreen } from '../screens/LoadingScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { colors } from '../themes/globalTheme';

// Argumentos que va a recibir cada Screen
export type RootStackParams = {
  LoginScreen: undefined,
  SearchScreen: undefined,
  CharacterScreen: { character: Characters, color: string },
  ProfileScreen: undefined,
}
//incluyo el type de Screens para avisar a las Screens que paramentros deben recibir
const Stack = createStackNavigator<RootStackParams>();

function NavigationStack() {
  const { status } = useContext(AuthContext);
  console.log("Estado al iniciar",status);
  useEffect(() => {
    SplashScreen.hide()
},[])

  if (status === 'checking') return <LoadingScreen />

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        title: 'Ricky & Morty',
        cardStyle: {
          backgroundColor: colors.neutral
        }
      }}>
      {
        (status !== 'authenticated')
          ? (
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
          ) :
          (<>
            <Stack.Screen name="SearchScreen" component={SearchScreen} />
            <Stack.Screen name="CharacterScreen" component={CharacterScreen} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          </>)}
    </Stack.Navigator>
  );
}

export default NavigationStack