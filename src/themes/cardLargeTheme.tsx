import { StyleSheet } from 'react-native';
import { colors } from './globalTheme';

export const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 5,
        backgroundColor: colors.secondary,
        height: 140,
        width: 140,
        marginBottom: 20,
        borderRadius: 10,
    },
    cardContainerLarge: {
        marginHorizontal: 5,
        height: 140,
        marginBottom: 20,
        borderRadius: 10,
    },
    data: {
        color: colors.secondary,
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft:210,
    },
    subtitles:{
        color: colors.primary,
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft:205,
    },
    id: {
        color: colors.primary,
        fontSize: 22,
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