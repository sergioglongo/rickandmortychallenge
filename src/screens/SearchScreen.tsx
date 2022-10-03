import React, { useState, useContext } from 'react';
import { Image, View, Text, FlatList, Keyboard, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { useCharactersPaginated } from '../hooks/useCharactersPaginated';
import { styles } from '../themes/globalTheme';
import CharacterCard from '../components/CharacterCard';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from '../contexts/AuthContext';
import { DrawerScreenProps } from '@react-navigation/drawer';
import CharacterCardLarge from '../components/CharacterCardLarge';
import { getCharacterSearch } from '../api/getCharacterSearch';

const screenWidth = Dimensions.get('window').width

interface Props extends DrawerScreenProps<any, any> { }

const HomeScreen = (props: Props) => {


    const [searchState, SetSearchState] = useState('')

    const { characters, loadCharacters } = getCharacterSearch(searchState)
    const [columns, setColumns] = useState(1)
    const { logOut, user, errorMessage, removeError } = useContext(AuthContext)

    const onChange = (text: string) => {
        SetSearchState(text)

    }
    const searchAction = () => {
        loadCharacters()
        Keyboard.dismiss() // Oculta el teclado

    }

    return (
        <View >
            <Image
                source={require('../assets/RMback.jpg')}
                style={styles.imagebackgound}
            />
            <View style={{ ...stylesLocal.input, width: screenWidth -20 , }}>
                <TextInput
                    // style={{ ...stylesLocal.textInput }} 
                    placeholder='buscar personaje'
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={onChange}
                />
                <View style={{ flex: 1 }}></View>
                <TouchableOpacity >
                    <Icon
                        name='search-outline'
                        color='gray'
                        size={30}
                        style={{ marginTop: 3 }}
                        onPress={() => (searchAction())}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center' }}>
                <FlatList
                    key={columns === 2 ? 2 : 1}
                    data={characters}
                    keyExtractor={(item) => `row-${item.id}`}
                    numColumns={columns}
                    ListHeaderComponent={(
                        <View style={{ alignItems: 'center' }}>
                            <Text style={[styles.title]}>Personajes</Text>
                        </View>
                    )}
                    renderItem={({ item }) =>
                        columns === 2 ? <CharacterCard character={item} {...props} />
                            : <CharacterCardLarge character={item} {...props} />
                    }
                    //cuando este cerca del final cargo los siguientes
                    onEndReached={loadCharacters}
                    onEndReachedThreshold={0.4}
                    initialNumToRender={10}
                // ListFooterComponent={
                //     <View style={{ flex: 1 }}>
                //         <ActivityIndicator
                //             style={{ height: 300 }}
                //             size={30}
                //             color='gray'
                //         />
                //     </View>
                // }
                />
            </View>
            <View style={{ ...styles.buttonFloatingMenu }}>
                <TouchableOpacity>
                    <Icon name="menu-outline"
                        onPress={() => (props.navigation.toggleDrawer())}
                        size={40} color="black" />
                </TouchableOpacity>
            </View>
            <View style={{ ...styles.buttonFloatingColumns }}>
                <TouchableOpacity onPress={() => setColumns(columns === 1 ? 2 : 1)}>
                    <Text style={styles.buttonFloatingColumnsText}>Cols:{columns}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const stylesLocal = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'red',
        // flexDirection: 'row',
        // alignItems: 'flex-end',
    },
    textBackground: {
        backgroundColor: 'F3F1F3',
        borderRadius: 50,
        height: 40
    },
    data: {
        color: 'gray',
        fontSize: 18

    },

    textInput: {
        color: 'black',
        fontSize: 20,
        justifyContent: 'center',
        // paddingLeft:5
    },
    backIcon: {
        marginLeft: 5,
        marginTop: 5,
        justifyContent: 'center'
    },
    loading: {
    },
    input: {
        position: 'absolute',
        zIndex: 999,
        backgroundColor: '#F3F1F3',
        borderRadius: 30,
        height: 40,
        top: 70,
        alignSelf:'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignContent: 'space-between',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
})

export default HomeScreen