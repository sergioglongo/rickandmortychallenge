import React from 'react';
import {Text, View} from 'react-native';
import {Characters} from '../interfaces/characterInterface'
import styles from '../themes/characterDetailTheme';

interface Props {
    character: Characters
}
const CharacterDetailHeader = ({ character }: Props) => {
    return (
        <View style={{flexDirection:'column',flexWrap:'wrap'}}>
            <View style={styles.dataHeaderContainer}>
                <Text style={styles.subtitles}>Especie:</Text>
                <Text style={styles.data}> {character.species}</Text>
                <View style={{marginHorizontal:15}}/>
                <Text style={styles.subtitles}>Estado:</Text>
                <Text style={styles.data}> {character.status}</Text>
            </View>
            <View style={styles.dataHeaderContainer}>
            </View>
            <View style={styles.dataHeaderContainer}>
                <Text style={styles.subtitles}>Tipo:</Text>
                <Text style={styles.data}> {character.type ? character.type : 'unknown'}</Text>
                <View style={{marginHorizontal:5}}/>
                <Text style={styles.subtitles}>Genero:</Text>
                <Text style={styles.data}> {character.gender ? character.gender : 'unknown'}</Text>
            </View>
            <View style={styles.dataHeaderContainer}>
            </View>
            <View style={styles.dataHeaderContainer}>
                <Text style={styles.subtitles}>Origen:</Text>
                <Text style={styles.data}> {character.origin.name}</Text>
            </View>
            <View style={styles.dataHeaderContainer}>
                <Text style={styles.subtitles}>Ubicación:</Text>
                <Text style={styles.data}> {character.location.name}</Text>
            </View>
        </View>
    );
}
export default CharacterDetailHeader
