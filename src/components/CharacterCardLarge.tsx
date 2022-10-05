import React, { useEffect, useRef, useState} from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { Characters } from '../interfaces/characterInterface';
import { styles } from '../themes/cardLargeTheme'
import { DrawerScreenProps } from '@react-navigation/drawer';
import FastImage from 'react-native-fast-image';
import useBackgroundColor from '../hooks/useBackgroundColor';

interface Props extends DrawerScreenProps<any, any> {
    character: Characters,
}//toma propiedades de Drawer y de Characters

const windowWith = Dimensions.get('window').width

const CharacterCardLarge = ({ character, navigation }: Props) => {

    const [bgColor, setBgColor] = useState('gray')
    const isMounted = useRef(true)
    
    // efecto para precargar fondo de card estimando el color predominante en la imagen
    useEffect(() => {
        useBackgroundColor(character,isMounted.current,setBgColor)
        return () => {
            isMounted.current = false
        }
    }, [])

    return (
        <TouchableOpacity activeOpacity={0.7} onPress={() =>
            navigation.navigate('CharacterScreen',{character: character,color: bgColor})
        }>
            <View style={{ ...styles.cardContainerLarge, backgroundColor: bgColor, width: windowWith * 0.95, height: windowWith * 0.48 }}>
                <FastImage
                    style={styles.characterImage}
                    source={{
                        uri: character.image,
                        priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                />
                <View >
                    <Text style={styles.id}>
                        {'Nº' + character.id}
                    </Text>
                    <Text style={{ ...styles.subtitles }}>Nombre:</Text>
                    <Text style={styles.data} adjustsFontSizeToFit numberOfLines={1}>{character.name} </Text>
                    <Text style={{ ...styles.subtitles }}>Especie:</Text>
                    <Text style={styles.data} adjustsFontSizeToFit numberOfLines={1}>{character.species} </Text>
                    <Text style={{ ...styles.subtitles }}>Estado:</Text>
                    <Text style={styles.data}>{character.status}</Text>

                </View>
            </View>
        </TouchableOpacity>
    );
}

export default CharacterCardLarge