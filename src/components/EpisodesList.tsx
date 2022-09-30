import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Episode } from '../interfaces/episodeInterface';

interface Props{
    episode: Episode
}

const EpisodesList = ({episode}:Props) => {
    return (
        <View style={styles.container} key={episode.name}>
            <Text style={styles.text}>{episode.episode} - {episode?.name}</Text>
        </View>
    );
}
export default EpisodesList

const styles = StyleSheet.create({
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
});