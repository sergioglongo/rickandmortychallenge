import { StackScreenProps } from '@react-navigation/stack';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaInsetsContext, useSafeAreaInsets } from 'react-native-safe-area-context';
import { RootStackParams } from '../navigation/NavigationStack';
import { colores } from '../themes/globalTheme';
import Icon from 'react-native-vector-icons/Ionicons'
import { FadeInImage } from '../components/FadeImage';
import CharacterDetail from '../components/CharacterDetail';

interface Props extends StackScreenProps<RootStackParams, 'CharacterScreen'> { }

const CharacterScreen = ({ navigation, route }: Props) => {

    const { character, color } = route.params
    const { top } = useSafeAreaInsets()
    const [isLoading, setIsLoading] = useState(false)

    return (
        <View style={{flex:1}}>
                <View style={{ ...styles.navBar , backgroundColor: color}}>
                        <TouchableOpacity style={{ ...styles.backIcon }}
                            activeOpacity={0.8}
                            onPress={() => navigation.pop()}
                        >
                            <Icon
                                name='arrow-back-circle-outline'
                                color='white'
                                size={40}
                            />
                        </TouchableOpacity>
                        <Text style={{ ...styles.id }}>
                            Nº{character.id}
                        </Text>
                </View>
            <View style={{ ...styles.imageSector, backgroundColor: color,  }}>
                <Text style={{ ...styles.name }}>
                    {character.name}
                </Text>
                <FadeInImage
                    uri={character.image}
                    style={styles.characterImage}
                />
            </View>
                {isLoading ?
                <View style={styles.loading}>
                    <ActivityIndicator 
                            color={color}                    
                            size={50}
                    />
                </View>
                :
                <View style={{flex:1}}>
                    <CharacterDetail character={character}/>
                </View>
                }
        </View>
    );
}

const styles = StyleSheet.create({
    imageSector: {
        height: 370,
        zIndex: 999,
        alignItems: 'center',
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000,
    },
    navBar: {
        width:'100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        alignContent: 'stretch',
    },
    backIcon: {
        marginLeft:5,
        marginTop:5
    },
    id: {
        marginRight:5,
        marginTop:5,
        color:'black',
        fontSize:30
    },
    name: {
        color: 'black',
        fontSize: 40,
        alignSelf: 'center',
        textAlign: 'center',
    },
    characterImage:{
        position:'absolute',
        width: 250,
        height:250,
        bottom: 0
    },
    loading:{
        }
});

export default CharacterScreen