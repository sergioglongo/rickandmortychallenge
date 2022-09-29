import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Characters } from '../interfaces/characterInterface';
import { FadeInImage } from '../components/FadeImage';
import { styles } from '../themes/cardTheme'

interface Props {
    character: Characters
}

const windowWith = Dimensions.get('window').width

const CharacterCard = ({ character }: Props) => {

    return (
        <TouchableOpacity activeOpacity={0.7}>
            <View style={{ ...styles.cardContainer, width: windowWith * 0.45, height: windowWith * 0.45 }}>
                <FadeInImage
                    uri={character.image}
                    style={styles.characterImage}
                />
                <Text style={styles.id}>
                    {'Nº' + character.id}
                </Text>
                <View style={{
                    backgroundColor: 'gray', opacity:0.9, padding:3, position: 'absolute',bottom: 0,right: 3
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