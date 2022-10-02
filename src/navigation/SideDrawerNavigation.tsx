import React , {useContext} from 'react'
import { createDrawerNavigator, DrawerContentScrollView,DrawerItemList,DrawerItem} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {Alert} from 'react-native'
import { AuthContext } from '../contexts/AuthContext';
import MainScreen from '../screens/MainScreen';
import NavigationStack from './NavigationStack';

function CustomDrawerContent(props:any) {
    
    const { logOut, user} = useContext(AuthContext)

    
    return (
        <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="Cerrar Sesión" onPress={() => Alert.alert(
      "Cerrar Sesión",
      "Confirma que cerrara la sesión activa",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Cerrar Sesión", onPress: () => logOut() }
      ]
    )} />
      </DrawerContentScrollView>
    );
}

const Drawer = createDrawerNavigator();

const SideDrawerNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="NavigationStack" component={NavigationStack} />
      <Drawer.Screen name="Perfil" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

export default SideDrawerNavigation

