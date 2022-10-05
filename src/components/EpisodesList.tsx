import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Episode } from '../interfaces/episodeInterface';
import { colors } from '../themes/globalTheme';

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
        backgroundColor:colors.neutral,
        marginVertical:2,
        borderColor:colors.secondary,
        borderWidth:1,
        marginHorizontal:5
    },
    text:{
        fontSize:16,
        color:colors.primary
    }
});