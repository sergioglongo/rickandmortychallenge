import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Episode } from '../interfaces/episodeInterface';

interface Props{
    episode: Episode,
    index:number
}

const EpisodesList = ({episode,index}:Props) => {
    return (
        <View style={styles.container} >
            <Text style={styles.text} key={index}>{episode.episode} - {episode?.name}</Text>
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