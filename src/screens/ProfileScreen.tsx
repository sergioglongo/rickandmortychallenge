import React, { useState, useContext } from 'react';
import { StyleSheet, Button, Text, View, Image, Alert, Keyboard } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import authAPI from '../api/authAPI';
import { AuthContext } from '../contexts/AuthContext';
import { LoginResponse } from '../interfaces/userInterfaces';
import { styles } from '../themes/globalTheme';
import Icon from 'react-native-vector-icons/Ionicons'
import { DrawerScreenProps } from '@react-navigation/drawer';

interface Props extends DrawerScreenProps<any, any> { }

const ProfileScreen = ({ navigation }: Props) => {
    const { user, userId, errorMessage, removeError, userUpdate } = useContext(AuthContext)

    const [name, setName] = useState(user?.name)
    const [surname, setSurname] = useState(user?.surname)
    const [phone, setPhone] = useState(user?.phone)

    const alertUpdate = () => {
        userUpdate(userId) // desata un action para actualizar el context en toda la app
        Keyboard.dismiss() // Oculta el teclado
        Alert.alert(
            "Actualización Exitosa",
            "Los datos fueron actualizados correctamente",
            [
                { text: "Aceptar" }
            ]
        )
    }
    const update = async () => {
        try {
            const data = {
                mail: user?.mail,
                name,
                surname,
                phone
            }
            await authAPI.put(`/user/${userId}`, data).then(() => alertUpdate())

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={{ flex: 1 }}>

            <Image
                source={require('../assets/profile-wall.jpg')}
                style={styles.imagebackgoundLogin}
            />
            <ScrollView style={{marginBottom:20}}>
                <View style={stylesLocal.logoContainer}>
                    <Text style={stylesLocal.welcome}>Perfil de Usuario</Text>
                </View>
                <View>
                    <Text style={stylesLocal.text}>Mail</Text>
                    <TextInput
                        style={{ ...stylesLocal.input, color: 'black' }}
                        value={user?.mail}
                        placeholder="mail"
                        editable={false}
                        selectTextOnFocus={false}
                    />
                </View>
                <View>
                    <Text style={stylesLocal.text}>Nombre</Text>
                    <TextInput
                        style={stylesLocal.input}
                        onChangeText={setName}
                        value={name}
                        placeholder="Nombre"
                    />
                </View>
                <View>
                    <Text style={stylesLocal.text}>Apellido</Text>
                    <TextInput
                        style={stylesLocal.input}
                        onChangeText={setSurname}
                        value={surname}
                        placeholder="Apellido"
                    />
                </View>
                <View >
                    <Text style={stylesLocal.text}>Telefono</Text>
                    <TextInput
                        style={stylesLocal.input}
                        onChangeText={setPhone}
                        value={phone}
                        placeholder="Telefono"
                    />
                </View>

                <View style={stylesLocal.buttonLogin} >
                    <Button
                        title='Actualizar'
                        onPress={() => (update())}
                        color='#02B1C8'
                    />
                </View>
                <View style={{ ...styles.buttonFloatingMenu }}>
                    <TouchableOpacity>
                        <Icon name="menu-outline"
                            onPress={() => (navigation.toggleDrawer())}
                            size={40} color="black" />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}
export default ProfileScreen

const stylesLocal = StyleSheet.create({
    input: {
        height: 50,
        marginHorizontal: 50,
        borderWidth: 3,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        borderColor: '#af03b4',
        paddingVertical: 10,
        fontSize: 18,
        opacity: 0.9,
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 50,
        marginVertical: 5
    },
    logoImage: {
        width: 200,
        height: 70,
        marginBottom: 8,
    },
    logoContainer: {
        marginTop: 10,
        width: '100%',
        alignItems: 'center'
    },
    welcome: {
        fontSize: 35,
        color: '#66e2fd',
        fontWeight: 'bold',
        marginTop: 35
    },
    buttonLogin: {
        marginHorizontal: 50,
        borderRadius: 15,
        marginTop: 20,

    }
});