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
                <ScrollView >
                    {episodesToShow?.map((episode,index) =>
                        <EpisodesList episode={episode} index={index}/>
                                         )}
                </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    dataContainer: {
        flex:1,
        marginTop:2,
        paddingHorizontal:10,
        paddingVertical:5,
        // backgroundColor:'red', 
        // flexDirection: 'row',
        // alignItems: 'flex-end',
    },
    title: {
        fontSize: 24,
        color: 'black',
        marginBottom:4,
        alignSelf:'center',
        marginRight:10
    }
    ,
    subtitles: {
        color: 'black',
        fontSize: 20
    },
    data: {
        color: 'gray',
        fontSize: 18

    }

})
export default CharacterDetail