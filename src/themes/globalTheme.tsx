import { StyleSheet } from 'react-native';


export const colors = {
    primary: 'black',
    secondary: 'gray',
    button:'#02B1C8',
    neutral:'white'
}

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    imagebackgound:{
        position: 'absolute',
        width: '100%',
        height: '100%',
        opacity: 0.2
    },
    imagebackgoundLogin:{
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    title: {
        fontSize: 30,
        marginBottom: 10,
        marginTop:10,
        color:colors.primary,
    },
 
    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 50,
    },
    menuBoton: {
        marginVertical: 10
    },
    menuTexto: {
        fontSize: 20
    },
    buttonFloating:{
        position:'absolute',
        backgroundColor:colors.secondary,
        borderRadius:100,
        bottom:20,
        right:20
    },
    buttonFloatingMenu:{
        position:'absolute',
        top:10,
        right:15,
        borderRadius:50,
        borderWidth:1,
        borderColor:colors.secondary,
        backgroundColor: colors.neutral
    }
});