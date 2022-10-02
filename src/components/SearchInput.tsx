import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons'


const SearchInput = (onChange:any) => {
    
    return (
        <View></View>

    );
}
export default SearchInput

const stylesLocal = StyleSheet.create({
   input: {
        backgroundColor: '#F3F1F3',
        marginHorizontal: 5,
        borderRadius: 30,
        height: 40,
        flexDirection: 'row',
        paddingHorizontal: 20,
        justifyContent: 'center',
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
 
})
