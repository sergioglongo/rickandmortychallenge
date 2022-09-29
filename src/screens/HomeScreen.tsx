import React , {useState} from 'react';
import { StyleSheet, Image, View, Button, Text, FlatList, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { useCharactersPaginated } from '../hooks/useCharactersPaginated';
import { styles } from '../themes/globalTheme';
import { Characters } from "../interfaces/characterInterface"
import CharacterCard from '../components/CharacterCard';
import { useSafeAreaInsets } from 'react-native-safe-area-context';



const HomeScreen = () => {

    const { characters, isLoading, loadCharacters } = useCharactersPaginated()
    const [columns, setColumns] = useState(2)

    return (
        <>
            <Image
                source={require('../assets/RMback.jpg')}
                style={styles.imagebackgound}
            />
            <View style={{alignItems:'center' }}>
            <FlatList
                data={characters}
                keyExtractor={(item) => item.id}
                numColumns={columns}
                ListHeaderComponent={(
                    <Text style={[styles.title]}>
                    Personajes
                    </Text>
                )}
                renderItem={({ item }) =>
                    <CharacterCard character={item}/>
                }
                //cuando este cerca del final cargo los siguientes
                onEndReached={loadCharacters}
                onEndReachedThreshold={0.4}
                ListFooterComponent={
                    <ActivityIndicator
                        style={{ height: 300 }}
                        size={30}
                        color='gray'
                    />
                }
            />
            </View>
            {/* <View
                style={{ alignItems: 'center' }}
            >
                {!isLoading?<Text>{characters[0]?.name}</Text>:<Text>"Loading"</Text>}
                
            </View> */}

        </>
    );
}


export default HomeScreen