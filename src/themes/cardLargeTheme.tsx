import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 5,
        backgroundColor: 'gray',
        height: 140,
        width: 140,
        marginBottom: 20,
        borderRadius: 10,
    },
    cardContainerLarge: {
        marginHorizontal: 5,
        backgroundColor: 'red',
        height: 140,
        marginBottom: 20,
        borderRadius: 10,
    },
    data: {
        color: 'gray',
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft:215,
    },
    subtitles:{
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft:210,
    },
    id: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
        position: 'absolute',
        bottom: 0,
        right:10
    },
    characterImage: {
        height: '100%',
        width: 200,
        position: 'absolute',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    }
})