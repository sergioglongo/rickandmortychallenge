import React, { useEffect, useRef, useState , useMemo} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Characters } from '../interfaces/characterInterface';
import { FadeInImage } from './FadeImage';
import { styles } from '../themes/cardLargeTheme'
import ImageColors from 'react-native-image-colors';
import { DrawerScreenProps } from '@react-navigation/drawer';
import FastImage from 'react-native-fast-image';


interface Props extends DrawerScreenProps<any, any> {
    character: Characters,
}

const windowWith = Dimensions.get('window').width

const CharacterCardLarge = ({ character, navigation }: Props) => {

    const [bgColor, setBgColor] = useState('gray')
    const isMounted = useRef(true)
    useEffect(() => {
        {
            ImageColors.getColors(character.image, { fallback: 'grey' })
                .then(colors => {
                    if (!isMounted.current) return //evita que calcule el color si no esta montado
                    colors.platform === 'android'
                        ? setBgColor(colors.dominant || 'gray')
                        : setBgColor('white')
                })
        }
        return () => {
            isMounted.current = false
        }
    }, [])

    return (
        <TouchableOpacity activeOpacity={0.7} onPress={() =>
            navigation.navigate(
                'CharacterScreen',
                {
                    character: character,
                    color: bgColor
                })
        }>
            <View style={{ ...styles.cardContainerLarge, backgroundColor: bgColor, width: windowWith * 0.95, height: windowWith * 0.48 }}>
                {/* <FadeInImage
                    uri={character.image}
                    style={styles.characterImage}
                /> */}
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