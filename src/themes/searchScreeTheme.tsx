import { StyleSheet } from 'react-native';
import {colors} from '../themes/globalTheme'


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textInput: {
        color: colors.primary,
        fontSize: 20,
        justifyContent: 'center',
    },
    input: {
        position: 'absolute',
        zIndex: 999,
        backgroundColor: colors.neutral,
        borderRadius: 30,
        height: 42,
        top: 12,
        marginLeft: 15,
        alignSelf: 'flex-start',
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignContent: 'space-between',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    filtersContainer: {
        position: 'absolute',
        zIndex: 999,
        height: 70,
        width: 300,
        top: 60,
        alignSelf: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
    filtersTitles: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    },
    filtersRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    },
    filterTitleText: {
        fontSize: 20,
        color:colors.primary,
        fontWeight:'bold'
    },
    buttonFloatingColumns: {
        width: 120,
        height: 44,
        borderColor: colors.secondary,
        borderRadius: 50,
        borderWidth: 1,
        // marginHorizontal:5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.neutral
    },
    buttonFloatingColumnsText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.primary
    }
})

export default styles