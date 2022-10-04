import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getEpisodes } from '../api/getEpisodes';
import { Characters } from '../interfaces/characterInterface'
import { Episode } from '../interfaces/episodeInterface'
import CharacterDetailHeader from './CharacterDetailHeader';
import EpisodesList from './EpisodesList';


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
            {/* <ScrollView >
                {episodesToShow?.map((episode, index) =>
                    <View style={styles.container} >
                        <Text style={styles.text} key={ index.toString()}>{episode.episode} - {episode?.name}</Text>
                    </View>
                )}
            </ScrollView> */}
        </View>
    );
}
const styles = StyleSheet.create({
    dataContainer: {
        flex: 1,
        marginTop: 2,
        paddingHorizontal: 10,
        paddingVertical: 5,
        // backgroundColor:'red', 
        // flexDirection: 'row',
        // alignItems: 'flex-end',
    },
    title: {
        fontSize: 24,
        color: 'black',
        marginBottom: 4,
        alignSelf: 'center',
        marginRight: 10
    }
    ,
    subtitles: {
        color: 'black',
        fontSize: 20
    },
    data: {
        color: 'gray',
        fontSize: 18

    },
    container:{
        marginBottom:1,
        backgroundColor:'white',
        marginVertical:2,
        borderColor:'gray',
        borderWidth:1,
        marginHorizontal:5
    },
    text:{
        fontSize:16,
        color:'black'
    }
})
export default CharacterDetail