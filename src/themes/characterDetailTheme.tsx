import { StyleSheet } from 'react-native';
import { colors } from './globalTheme';

const styles = StyleSheet.create({
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