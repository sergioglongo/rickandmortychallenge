import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Button, Text, View, Image, Alert, Linking } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import authAPI from '../api/authAPI';
import { AuthContext } from '../contexts/AuthContext';
import { colors, styles } from '../themes/globalTheme';
import Icon from 'react-native-vector-icons/Ionicons'
import { DrawerScreenProps } from '@react-navigation/drawer';

interface Props extends DrawerScreenProps<any, any> { }

const AboutScreen = ({ navigation }: Props) => {

    const { userId } = useContext(AuthContext)

    const alertUpdate = () => {
        Alert.alert(
            "Actualización Exitosa",
            "Los datos fueron actualizados correctamente",
            [
                { text: "Aceptar" }
            ]
        )
    }
    // efecto para volver a login si el usuario cerro sesión
    useEffect(() => {
        if (!userId)
            navigation.navigate('LoginScreen')
    }, [userId])

    return (
        <View style={{ flex: 1 }}>

            <Image
                source={require('../assets/login-black9.jpg')}
                style={styles.imagebackgoundLogin}
            />
            <ScrollView style={{ marginBottom: 20 }}>
                <View style={stylesLocal.welcomeContainer}>
                    <Text style={stylesLocal.welcome}>Acerca de la Aplicación</Text>
                </View>
                <View style={stylesLocal.logoContainer}>
                    <Image
                        source={require('../assets/RickAndMorty.png')}
                        style={stylesLocal.logoImage}
                    />
                    <Text style={stylesLocal.textVersion}>Version 1.0</Text>

                </View>
                <View>
                    <Text style={stylesLocal.textTitle}>Contacto</Text>
                </View>
                <View style={stylesLocal.contactContainer}>
                    <TouchableOpacity>
                        <Icon name="logo-facebook"
                            onPress={() => { Linking.openURL('https://www.facebook.com/sergiogiovannilongo') }}
                            size={40} color='#1b74e4' />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="logo-linkedin"
                            onPress={() => { Linking.openURL('https://www.linkedin.com/in/sergio-longo-7987b458/') }}
                            size={40} color='#0a66c2' />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="logo-github"
                            onPress={() => { Linking.openURL('https://github.com/sergioglongo') }}
                            size={40} color={colors.neutral} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="logo-twitter"
                            onPress={() => { Linking.openURL('https://twitter.com/sergiolongoarg') }}
                            size={40} color='#1d9bf0' />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="mail"
                            onPress={() => { Linking.openURL('mailto:sergiolongo@gmail.com?subject=Consulta desde RickAndMortyAPI') }}
                            size={40} color={colors.neutral} />
                    </TouchableOpacity>

                </View>
                <View >
                    <Text style={stylesLocal.textTitle}>Creador</Text>
                    <Text style={stylesLocal.text}>Sergio Giovanni Longo</Text>
                </View>
                <View style={{ ...styles.buttonFloatingMenu }}>
                    <TouchableOpacity>
                        <Icon name="menu-outline"
                            onPress={() => (navigation.toggleDrawer())}
                            size={40} color={colors.primary} />
                    </TouchableOpacity>
                </View>
                <View style={stylesLocal.buttonFloatingBack}>
                    <TouchableOpacity>
                        <Icon name="arrow-back-circle-outline"
                            onPress={() => { navigation.navigate('SearchScreen') }}
                            size={40} color={colors.primary} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}
export default AboutScreen

const stylesLocal = StyleSheet.create({
    textTitle: {
        color: colors.neutral,
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 5,
        alignSelf: 'center',
        marginTop: 5,
    },
    text: {
        color: colors.neutral,
        fontSize: 18,
        marginVertical: 5,
        alignSelf: 'center',

    },
    textVersion: {
        color: colors.neutral,
        fontSize: 14,
        marginTop: 10
    },
    logoImage: {
        width: 150,
        height: 150,
        backgroundColor: colors.neutral
    },
    logoContainer: {
        marginVertical: 20,
        width: '100%',
        alignItems: 'center',
        paddingtop: 10,
    },
    welcomeContainer: {
        marginTop: 20,
        width: '100%',
        alignItems: 'center'
    },
    welcome: {
        fontSize: 35,
        color: '#66e2fd',
        fontWeight: 'bold',
        marginTop: 50
    },
    buttonFloatingBack: {
        position: 'absolute',
        top: 10,
        left: 15,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: colors.secondary,
        backgroundColor: colors.neutral
    },
    contactContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 5
    }
});