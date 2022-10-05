import React from 'react';
import { Text, View } from 'react-native';
import { FlatList} from 'react-native-gesture-handler';
import { getEpisodes } from '../api/getEpisodes';
import { Characters } from '../interfaces/characterInterface'
import styles from '../themes/characterDetailTheme';
import CharacterDetailHeader from './CharacterDetailHeader';

interface Props {
    character: Characters
}

const CharacterDetail = ({ character }: Props) => {

    let episodesIds = character.episode.map(episode => {
        return episode.split('/')[5]
    })
    let episodesToShow = getEpisodes(episodesIds).episodesState

    return (
        <View style={styles.dataContainer}>
            <CharacterDetailHeader character={character} />
            <Text style={styles.title}>Episodios</Text>
            <FlatList
                data={episodesToShow}
                keyExtractor={(character) => character.id.toString()}
                renderItem={({item}) => <Text style={styles.text}>{item.episode} - {item.name}</Text>}
            />
        </View>
    );
}

export default CharacterDetail