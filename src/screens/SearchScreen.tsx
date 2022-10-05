import React, { useState, useContext, useEffect } from 'react';
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
import { Dropdown, MultiSelect } from 'react-native-element-dropdown'
import ListEmpty from '../components/ListEmpty';
import { useDebounce } from '../hooks/useDebounce';

const screenWidth = Dimensions.get('window').width

interface Props extends DrawerScreenProps<any, any> { }

const SearchScreen = (props: Props) => {

    const [searchState, SetSearchState] = useState('')
    const [status, setStatus] = useState(null);
    const [gender, setGender] = useState(null);
    const { characters, loadCharacters } = getCharacterSearch(searchState,status,gender)
    const [columns, setColumns] = useState(1)
    const debounceValue = useDebounce(searchState,1000)// debounce se ejecuta al cambiar searchState por ser un estado local


    useEffect(()=>{
        loadCharacters() //recarga personajes en base a input y filtros
    },[debounceValue])// cuando el texto en espera cambie ejecuta el efecto

    const statusList = [
        {label: 'all', value: 'all'},
        {label: 'alive', value: 'alive'},
        {label: 'dead', value: 'dead'},
        {label: 'unknown', value: 'unknown'},
    ];// datos a deplegar en combo de estado

    const genderList = [
        {label: 'all', value: 'all'},
        {label: 'female', value: 'female'},
        {label: 'male', value: 'male'},
        {label: 'genderless', value: 'genderless'},
        {label: 'unknown', value: 'unknown'},
    ];// datos a deplegar en combo de estado
 
    const searchAction = () => {
        loadCharacters()
        Keyboard.dismiss() // Oculta el teclado
    }
    const _renderItem = (item:any) => {
        return (
            <View style={stylesLocal.item}>
                <Text style={stylesLocal.textItem}>{item.label}</Text>
            </View>
        );
    }
    const onChangeStatus = (item:any) => {
        setStatus(item.value);
    }    
    const onChangeGender = (item:any) => {
        setGender(item.value);
    }
    
    useEffect(() => {
        loadCharacters()
        
    }, [status,gender])
    

    return (
        <View style={{flex:1, }}>
            <Image
                source={require('../assets/RMback.jpg')}
                style={styles.imagebackgound}
            />
            <View style={{ ...stylesLocal.input, width: screenWidth * 0.95,}}>
                <TextInput
                    style={{ width:'94%' }} 
                    placeholder='buscar personaje'
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={SetSearchState}
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
                    initialScrollIndex={0}
                    key={columns === 2 ? 2 : 1}
                    data={characters}
                    keyExtractor={(item,index) => `row-${index}`}
                    numColumns={columns}
                    ListHeaderComponent={(
                        <View style={{ alignItems: 'center', marginTop: 125 }}>

                        </View>
                    )}
                    ListEmptyComponent={<ListEmpty/>}
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
            <View style={{ ...styles.buttonFloatingColumns, width:120,left: 105 }}>
                    <Dropdown
                        style={stylesLocal.dropdown}
                        containerStyle={stylesLocal.shadow}
                        data={statusList}
                        searchPlaceholder="state"
                        labelField="label"
                        valueField="value"
                        placeholder="all"
                        value={status}
                        onChange={onChangeStatus}
                        renderItem={item => _renderItem(item)}
                    />
            </View>
            <View style={{ ...styles.buttonFloatingColumns, width:120,left: 230 }}>
                    <Dropdown
                        style={stylesLocal.dropdown}
                        containerStyle={stylesLocal.shadow}
                        data={genderList}
                        searchPlaceholder="gender"
                        labelField="label"
                        valueField="value"
                        placeholder="all"
                        value={gender}
                        onChange={onChangeGender}
                        renderItem={item => _renderItem(item)}
                    />
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
        alignSelf: 'center',
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
    dropdown: {
        backgroundColor: 'white',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        marginTop: 1,
        width:90,
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    item: {
        paddingVertical: 3,
        paddingHorizontal: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    textItem: {
        flex: 1,
        fontSize: 16,
        color:'black',
    },
})

export default SearchScreen