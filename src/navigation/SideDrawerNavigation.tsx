import React, { useContext } from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem, DrawerScreenProps } from '@react-navigation/drawer';
import ProfileScreen from '../screens/ProfileScreen';
import { Alert, Image ,StyleSheet, Text , View, useWindowDimensions} from 'react-native'
import { AuthContext } from '../contexts/AuthContext';
import NavigationStack from './NavigationStack';
import SearchScreen from '../screens/SearchScreen';


function CustomDrawerContent(props:any) {

    const { logOut, user } = useContext(AuthContext)
    const hideShow= () => {
        props.navigation.toggleDrawer()
        logOut()
    }
    return (
        <DrawerContentScrollView {...props}>
            <View style={{flex:1, alignItems:'center', marginVertical:30}}>
                <Image
                    source={require('../assets/profile-Longo.jpg')}
                    style={{ width: 150, height: 150, borderRadius: 100, backgroundColor: 'red' }}
                />
                <Text style={stylesLocal.textUser}>{user?.name} {user?.surname}</Text>
                <Text style={stylesLocal.textMail}>{user?.mail}</Text>
            </View>
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
                    { text: "Cerrar Sesión", onPress: () => hideShow() }
                ]
            )} />
        </DrawerContentScrollView>
    );
}

const Drawer = createDrawerNavigator();

const SideDrawerNavigation = () => {
    const { width } = useWindowDimensions()
    
    return (
        <Drawer.Navigator 
        screenOptions={{
            drawerType: width >= 768 ? 'permanent' : 'front',
            headerShown:false,
            drawerPosition:'right',
        }}
          drawerContent={props => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen name="NavigationStack" options={{title:'Personajes'}} component={NavigationStack} />
            <Drawer.Screen name="ProfileScreen" options={{title:'Perfil'}} component={ProfileScreen} />
        </Drawer.Navigator>
    );
}

const stylesLocal = StyleSheet.create({
    textUser:{
        fontSize:24,
        marginTop:5
    },
    textMail:{
        fontSize:16,
        marginTop:5
    },
    
})
export default SideDrawerNavigation

