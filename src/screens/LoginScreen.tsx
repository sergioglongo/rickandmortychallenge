import React, { useContext, useState, useEffect } from 'react'
import { Image, Text, Keyboard, View, StyleSheet, Button, Alert } from "react-native";
import { colors, styles } from "../themes/globalTheme";
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import { AuthContext } from '../contexts/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginScreen = () => {

    const navigation = useNavigation()

    const { signIn, errorMessage, removeError } = useContext(AuthContext)
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        if(errorMessage.length===0) return
        Alert.alert(
            "Login Incorrecto",
            errorMessage,
            [
                { text: "Aceptar",
                onPress:removeError
            }
            ]
        )
    }, [errorMessage])

    let loginTry = async () => {
        Keyboard.dismiss() // Oculta el teclado
        console.log("Envio datos a SignIn",mail, password);
        
        signIn({ mail, password }) //realiza action de logueo
    }
    return (
        <View style={{ flex: 1 }}>
            <Image
                source={require('../assets/login-black9.jpg')}
                style={styles.imagebackgoundLogin}
            />
            <View style={stylesLocal.logoContainer}>
                <Image
                    source={require('../assets/rick-morty-logo.png')}
                    style={stylesLocal.logoImage}
                />
            </View>
            <View style={stylesLocal.logoContainer}>
                <Text style={stylesLocal.welcome}>Bienvenido</Text>
            </View>
            <View>
                <Text>Ingrese mail</Text>
                <TextInput
                    style={stylesLocal.input}
                    onChangeText={setMail}
                    value={mail}
                    placeholder="Correo"
                />
            </View>
            <View>
                <Text>Ingrese Password</Text>
                <TextInput
                    style={stylesLocal.input}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="Contraseña"
                    secureTextEntry
                />
            </View>
            <View style={stylesLocal.buttonLogin} >
                <Button
                    title='Iniciar Sesión'
                    onPress={loginTry}
                    color='#02B1C8'
                />
            </View>

        </View>
    );
}

const stylesLocal = StyleSheet.create({
    input: {
        height: 50,
        marginHorizontal: 50,
        borderWidth: 3,
        padding: 10,
        borderRadius: 10,
        backgroundColor: colors.neutral,
        borderColor: '#89C845',
        paddingVertical: 10,
        fontSize: 18,
        opacity: 0.9,
    },
    logoImage: {
        width: 300,
        height: 110,
        marginBottom: 8,
    },
    logoContainer: {
        marginTop: 50,
        width: '100%',
        alignItems: 'center'
    },
    welcome: {
        fontSize: 35,
        color: '#02B1C8',
        fontWeight: 'bold',
    },
    buttonLogin: {
        marginHorizontal: 50,
        borderRadius: 15,
        marginTop: 20,

    }
})

export default LoginScreen