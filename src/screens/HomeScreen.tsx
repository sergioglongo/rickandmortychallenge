import React, { useState, useContext } from 'react';
import { Image, View, Text, FlatList, ActivityIndicator, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { useCharactersPaginated } from '../hooks/useCharactersPaginated';
import { styles } from '../themes/globalTheme';
import CharacterCard from '../components/CharacterCard';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from '../contexts/AuthContext';
import { DrawerScreenProps } from '@react-navigation/drawer';
import CharacterCardLarge from '../components/CharacterCardLarge';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Characters} from '../interfaces/characterInterface'

interface Props extends DrawerScreenProps<any, any> { }
const ITEM_HEIGHT = Dimensions.get('window').height * 0.45

const HomeScreen = (props: Props) => {

    const { characters, isLoading, loadCharacters } = useCharactersPaginated()
    const [columns, setColumns] = useState(1)
    const { logOut, user, errorMessage, removeError } = useContext(AuthContext)

    const renderItem = ({item,index}:any) =>{
        return(
            columns === 2 ? <CharacterCard character={item} {...props} />
                            : <CharacterCardLarge character={item} {...props} />
        )
    }

    const getItem = (data:any, index:number) =>({
        key:index,
        id: data.id,
        name: data.name
    })

    const getItemLayout = (data:any,index:number) =>{
        return {
            length:ITEM_HEIGHT,
            offset: ITEM_HEIGHT * data.length,
            index,
        }
    }

    return (
        <View >
            <Image
                source={require('../assets/RMback.jpg')}
                style={styles.imagebackgound}
            />
            <View style={{ alignItems: 'center' }}>
                {/* <VirtualizedList 
                    data={characters}
                    initialNumToRender={10}
                    renderItem={renderItem}
                    keyExtractor={(item) => `row-${item.id}`}
                    getItemCount={data => data.length}
                    getItem={getItem}
                />
                 */}
                <FlatList
                    key={columns === 2 ?2:1}
                    data={characters}
                    keyExtractor={(item) => `row-${item.id}`}
                    numColumns={columns}
                    ListHeaderComponent={(
                        <View style={{ alignItems: 'center' }}>
                            <Text style={[styles.title]}>Personajes</Text>
                        </View>
                    )}
                    renderItem={renderItem}
                    //cuando este cerca del final cargo los siguientes
                    getItemLayout={getItemLayout}
                    onEndReached={loadCharacters}
                    onEndReachedThreshold={0.4}
                    initialNumToRender={6}
                    ListFooterComponent={
                        <View style={{ flex: 1 }}>
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
                    <Icon name="search-circle-outline" 
                    onPress={() => props.navigation.navigate('SearchScreen')} 
                    size={50} 
                    color="white" 
                    />
                </TouchableOpacity>
            </View>
            <View style={{ ...styles.buttonFloatingMenu }}>
                <TouchableOpacity>
                    <Icon name="menu-outline"
                        onPress={() => (props.navigation.toggleDrawer())}
                        size={38} color="black" />
                </TouchableOpacity>
            </View>
            <View style={{ ...styles.buttonFloatingColumns }}>
                <TouchableOpacity onPress={()=>setColumns(columns===1?2:1)}>
                    <Text style={styles.buttonFloatingColumnsText}>Cols:{columns}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


export default HomeScreen