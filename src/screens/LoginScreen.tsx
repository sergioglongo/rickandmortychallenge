import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View, StyleSheet, Button } from "react-native";
import { styles } from "../themes/globalTheme";
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";

const LoginScreen = () => {

    const navigation = useNavigation()

    const [mail, setMail] = useState('')



    return (
        <View style={{ flex: 1 }}>
            <Image
                source={require('../assets/login-black9.jpg')}
                style={styles.imagebackgoundLogin}
            />
            <View>
                <Text style={{ color: 'white' }}>Hola mundo</Text>
            </View>
            <View style={stylesLocal.logoContainer}>
                <Image
                    source={require('../assets/rick-morty-logo.png')}
                    style={stylesLocal.logoImage}
                />
            </View>
            <View>
                <Text>Ingrese mail</Text>
                <TextInput
                    style={stylesLocal.input}
                    onChangeText={setMail}
                    value={mail}
                    placeholder="ingrese mail"
                />
            </View>
            <View>
                <Text>Ingrese Password</Text>
                <TextInput
                    style={stylesLocal.input}
                    onChangeText={setMail}
                    value={mail}
                    placeholder="ingrese password"
                    secureTextEntry
                />
            </View>
            <View style={stylesLocal.buttonLogin} >
                <Button 
                    title='Iniciar Sesión'
                    onPress={()=>navigation.navigate('HomeScreen')}
                />
            </View>
        </View>
    );
}

const stylesLocal = StyleSheet.create({
    input: {
        height: 40,
        marginHorizontal: 50,
        borderWidth: 1,
        padding: 10,
        borderRadius: 15,
        backgroundColor: 'white',
        borderColor:'green',
        paddingVertical:10
    },
    logoImage: {
        width: 300,
        height: 110,
        marginBottom: 8,
    },
    logoContainer:{
        width:'100%', 
        alignItems:'center'
    },
    buttonLogin:{
        marginHorizontal: 50,
        borderRadius: 15,
        marginTop:20
    }
})

export default LoginScreen