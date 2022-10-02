import React, { useState } from 'react';
import { StyleSheet, Image, View, Button, Text, FlatList, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { useCharactersPaginated } from '../hooks/useCharactersPaginated';
import { styles } from '../themes/globalTheme';
import { Characters } from "../interfaces/characterInterface"
import CharacterCard from '../components/CharacterCard';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import {RootStackParams} from '../navigation/NavigationStack'


const HomeScreen = () => {

    const { characters, isLoading, loadCharacters } = useCharactersPaginated()
    const [columns, setColumns] = useState(2)
    const navigation = useNavigation()

    return (
        <View >
            <Image
                source={require('../assets/RMback.jpg')}
                style={styles.imagebackgound}
            />
            
            <View style={{ alignItems: 'center' }}>
                <FlatList
                    data={characters}
                    keyExtractor={(item) => `row-${item.id}`}
                    numColumns={columns}
                    ListHeaderComponent={(
                        <View>

                            <Text style={[styles.title]}>
                                Personajes
                            </Text>
                        </View>
                    )}
                    renderItem={({ item }) =>
                        <CharacterCard character={item} />
                    }
                    //cuando este cerca del final cargo los siguientes
                    onEndReached={loadCharacters}
                    onEndReachedThreshold={0.4}
                    initialNumToRender={10}
                    ListFooterComponent={
                        <View style={{flex:1}}>
                            <ActivityIndicator
                                style={{ height: 300 }}
                                size={30}
                                color='gray'
                            />

                        </View>
                    }
                />
            </View>
            <View style={styles.buttonFloating}>
                <TouchableOpacity>
                    <Icon name="search-circle-outline" onPress={()=>navigation.navigate('SearchScreen')} size={50} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
}


export default HomeScreen