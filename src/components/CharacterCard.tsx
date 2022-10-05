import React, { useEffect, useRef, useState } from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { Characters } from '../interfaces/characterInterface';
import { styles } from '../themes/cardTheme'
import ImageColors from 'react-native-image-colors';
import { DrawerScreenProps } from '@react-navigation/drawer';
import FastImage from 'react-native-fast-image'
import useBackgroundColor from '../hooks/useBackgroundColor';

interface Props extends DrawerScreenProps<any, any> {
    character: Characters,
}//toma propiedades de Drawer y de Characters

// obtiene dimensiones de la pantalla para adaptar elementos
const windowWith = Dimensions.get('window').width

const CharacterCard = ({ character, navigation }: Props) => {

    const [bgColor, setBgColor] = useState('gray')
    const isMounted = useRef(true)
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
            <View style={{ ...styles.cardContainer, backgroundColor: bgColor, width: windowWith * 0.45, height: windowWith * 0.45 }}>
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