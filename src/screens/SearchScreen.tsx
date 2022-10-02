import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../themes/globalTheme';
import Icon from 'react-native-vector-icons/Ionicons'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/NavigationStack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SearchInput from '../components/SearchInput';
import { getCharacterSearch } from '../api/getCharacterSearch';

interface Props extends StackScreenProps<RootStackParams, 'CharacterScreen'> { }

const SearchScreen = ({ navigation, route }: Props) => {
    const { top } = useSafeAreaInsets()
    const [isLoading, setIsLoading] = useState(false)
    const [searchState, SetSearchState] = useState('')

    const onChange = (text: string) => {
        SetSearchState(text)
    }

    let episodesToShow = getCharacterSearch(searchState).charactersState


    return (
        <View style={stylesLocal.container}>
            <View style={{ ...stylesLocal.navBar, backgroundColor: 'blue' }}>
                <TouchableOpacity style={{ ...stylesLocal.backIcon }}
                    activeOpacity={0.8}
                    onPress={() => navigation.pop()}
                >
                    <Icon
                        name='arrow-back-circle-outline'
                        color='Black'
                        size={40}
                    />
                </TouchableOpacity>
                <Text style={{ ...stylesLocal.id }}>
                    Id
                </Text>
            </View>
            <View style={stylesLocal.input}>
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
                    />
                </TouchableOpacity>
            </View>
            {isLoading ?
                <View style={stylesLocal.loading}>
                    <ActivityIndicator
                        color={'white'}
                        size={50}
                    />
                </View>
                :
                <View style={{ flex: 1 }}>
                    <Text>Componente a mostrar </Text>
                </View>
            }
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
    navBar: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        alignContent: 'stretch',
    },
    id: {
        marginRight: 5,
        marginTop: 5,
        color: 'black',
        fontSize: 30
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
        backgroundColor: '#F3F1F3',
        marginHorizontal: 5,
        borderRadius: 30,
        height: 40,
        flexDirection: 'row',
        paddingHorizontal: 20,
        justifyContent: 'center',
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

export default SearchScreen