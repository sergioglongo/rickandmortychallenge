import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ListEmpty = () => {
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:30}}>No se encontraron datos</Text>
        </View>
    );
}
export default ListEmpty

const styles = StyleSheet.create({
});