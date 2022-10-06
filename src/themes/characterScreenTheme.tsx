import { colors } from '../themes/globalTheme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    imageSector: {
        height: 370,
        zIndex: 999,
        alignItems: 'center',
        borderBottomRightRadius: 100,
        borderBottomLeftRadius: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    navBar: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        alignContent: 'stretch',
    },
    backIcon: {
        marginLeft: 5,
        marginTop: 5
    },
    id: {
        marginRight: 5,
        marginTop: 5,
        color: colors.primary,
        fontSize: 30
    },
    name: {
        color: colors.primary,
        fontSize: 40,
        alignSelf: 'center',
        textAlign: 'center',
    },
    characterImage: {
        // position: 'absolute',
        width: 250,
        height: 250,
        // bottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,

    },
    dataContainer: {
        flex: 1,
        marginTop: 2,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    title: {
        fontSize: 24,
        color: colors.primary,
        marginBottom: 4,
        alignSelf: 'center',
        marginRight: 10
    }
    ,
    subtitles: {
        color: colors.primary,
        fontSize: 20
    },
    data: {
        color: 'gray',
        fontSize: 18

    },
    container:{
        marginBottom:1,
        backgroundColor:colors.neutral,
        marginVertical:2,
        borderColor:'gray',
        borderWidth:1,
        marginHorizontal:5
    },
    text:{
        fontSize:16,
        color:colors.primary
    },
    dataHeaderContainer: {
        // backgroundColor:'red', 
        flexDirection: 'row',
        flexWrap:'wrap',
        alignItems: 'flex-end',
        marginVertical:2
    },
})

export default styles