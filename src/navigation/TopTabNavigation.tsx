import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';

const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigation() {
    // calcular el top necesario para bajar en equipos con Notch
    const { top: paddingTop } = useSafeAreaInsets()
  
    return (
    
    <Tab.Navigator
        style={{paddingTop}}
        sceneContainerStyle={{
            backgroundColor: 'white'
        }}
    >
      <Tab.Screen name="Listado" component={HomeScreen} />
      <Tab.Screen name="Busqueda" component={SearchScreen} />
    </Tab.Navigator>
  );
}