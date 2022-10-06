import React, { useState, useEffect } from 'react';
import { Image, View, Text, FlatList, Keyboard, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import  styles from '../themes/searchScreeTheme';
import  {colors, styles as stylesGlobal} from '../themes/globalTheme';

import CharacterCard from '../components/CharacterCard';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerScreenProps } from '@react-navigation/drawer';
import CharacterCardLarge from '../components/CharacterCardLarge';
import { getCharacterSearch } from '../api/getCharacterSearch';
import ListEmpty from '../components/ListEmpty';
import { useDebounce } from '../hooks/useDebounce';
import ButtonFloatingMenu from '../components/ButtonFloatingMenu';
import DropDownFilter from '../components/DropDownFilter';
import { Data } from '../interfaces/dropDownInterface'

const screenWidth = Dimensions.get('window').width

interface Props extends DrawerScreenProps<any, any> { }

const SearchScreen = (props: Props) => {

    // creacion de estados locales
    const [searchState, SetSearchState] = useState('')
    const [status, setStatus] = useState<string>('');
    const [gender, setGender] = useState<string>('');
    // llamados a funciones
    const { characters, loadCharacters, isLoading} = getCharacterSearch(searchState, status, gender)
    const debounceValue = useDebounce(searchState, 1000)// debounce se ejecuta al cambiar searchState por ser un estado local
    // estado para determinar cantidad de columnas a mostrar, debe ser declarado despues del llamado a los personajes
    const [columns, setColumns] = useState(1)// cantidad de columnas a mostrar

    useEffect(() => {
        loadCharacters() //recarga personajes en base a input y filtros
    }, [debounceValue])// cuando el texto en espera cambie ejecuta el efecto

    // datos para DropDown
    const statusList: Data[] = [
        { label: 'all', value: 'all' },
        { label: 'alive', value: 'alive' },
        { label: 'dead', value: 'dead' },
        { label: 'unknown', value: 'unknown' },
    ];// datos a deplegar en combo de estado

    const genderList: Data[] = [
        { label: 'all', value: 'all' },
        { label: 'female', value: 'female' },
        { label: 'male', value: 'male' },
        { label: 'genderless', value: 'genderless' },
        { label: 'unknown', value: 'unknown' },
    ];// datos a deplegar en combo de estado

    // accion de boton lupa para buscar, aunque no es necesario
    const searchAction = () => {
        loadCharacters()
        Keyboard.dismiss() // Oculta el teclado
    }

    // renderiza nuevamente el listado cuando cambian status o gender
    useEffect(() => {
        loadCharacters()
    }, [status, gender])

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/RMback.jpg')}
                style={stylesGlobal.imagebackgound}
            />
            <View style={{ ...styles.input, width: screenWidth * 0.80, }}>
                <TextInput
                    style={{ width: '94%', fontSize: 20, paddingVertical: 1 }}
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
                    key={columns === 2 ? 2 : 1} //alterna la cantidad de columnas
                    data={characters}
                    keyExtractor={(item, index) => `row-${index}`}
                    numColumns={columns}
                    ListHeaderComponent={(
                        <View style={{ marginTop: 140 }}></View>
                    )}// espacio para bajar el header pudiendo ver cards en scroll
                    ListFooterComponent={
                        <ActivityIndicator style={{height:400}} size={50} color={colors.secondary} />
                    }
                    ListEmptyComponent={<ListEmpty />}
                    renderItem={({ item }) => //elterna entre card de 1 columna o 2 columnas
                        columns === 2 ? <CharacterCard character={item} {...props} />
                            : <CharacterCardLarge character={item} {...props} />
                    }
                    //cuando este cerca del final cargo los siguientes
                    onEndReached={loadCharacters}
                    onEndReachedThreshold={0.4}
                    initialNumToRender={10}
                />

            </View>
            <ButtonFloatingMenu {...props} />
            <View style={{ ...styles.filtersContainer, width: screenWidth * 0.95 }}>
                <View style={{ ...styles.filtersTitles }}>
                    <Text style={styles.filterTitleText}>Vista</Text>
                    <Text style={styles.filterTitleText}>Estado</Text>
                    <Text style={styles.filterTitleText}>Genero</Text>
                </View>
                <View style={{ ...styles.filtersRow }}>
                    <View style={styles.buttonFloatingColumns}>
                        <TouchableOpacity onPress={() => setColumns(columns === 1 ? 2 : 1)}>
                            <Text style={styles.buttonFloatingColumnsText}>Cols:{columns}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonFloatingColumns}>
                        <DropDownFilter data={statusList} value={status} onChange={(item) => setStatus(item.value)} />
                    </View>
                    <View style={styles.buttonFloatingColumns}>
                        <DropDownFilter data={genderList} value={gender} onChange={(item) => setGender(item.value)} />
                    </View>
                </View>
            </View>
        </View>
    );
}

export default SearchScreen