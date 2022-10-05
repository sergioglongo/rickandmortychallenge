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
    name: {
        color: colors.primary,
        fontSize: 20,
        fontWeight: 'bold',

    },
    id: {
        color: colors.primary,
        fontSize: 20,
        fontWeight: 'bold',
        position: 'absolute',
        top: 1,
        left: 3
    },
    characterImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        borderRadius: 8
    }
})