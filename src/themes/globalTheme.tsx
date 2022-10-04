import { StyleSheet } from 'react-native';


export const colores = {
    primary: '#5856D6',
    secondary: 'gray'
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
        color:'black',
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
        backgroundColor:'gray',
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
        borderColor:'gray',
        backgroundColor: 'white'
    },
    buttonFloatingColumns:{
        position:'absolute',
        width:85,
        height:44,
        top:10,
        left:15,
        borderColor:'gray',
        borderRadius:50,
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white'
    },
    buttonFloatingColumnsText:{
        fontSize:20,
        fontWeight:'bold',
        color:'black'
    }
});