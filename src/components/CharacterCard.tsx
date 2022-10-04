import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Characters } from '../interfaces/characterInterface';
import { FadeInImage } from '../components/FadeImage';
import { styles } from '../themes/cardTheme'
import ImageColors from 'react-native-image-colors';
import { useNavigation } from '@react-navigation/native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import FastImage from 'react-native-fast-image'

interface Props extends DrawerScreenProps<any, any> {
    character: Characters,
}

const windowWith = Dimensions.get('window').width

const CharacterCard = ({ character, navigation }: Props) => {

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
            <View style={{ ...styles.cardContainer, backgroundColor: bgColor, width: windowWith * 0.45, height: windowWith * 0.45 }}>
                {/* <FadeInImage
                    uri={character.image}
                    style={styles.characterImage}
                /> */}
                <FastImage
                    style={ styles.characterImage}
                    source={{
                        uri: character.image,
                        priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                />
                <Text style={styles.id}>
                    {'Nº' + character.id}
                </Text>
                <View style={{
                    backgroundColor: 'gray', opacity: 0.9, padding: 3, position: 'absolute', bottom: 0, right: 3
                }}>
                    <Text style={styles.name}>
                        {character.name}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default CharacterCard