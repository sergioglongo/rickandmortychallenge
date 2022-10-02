import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const BackgroundLogin = () => {
    return (
        <View >
            <Image
                source={require('../assets/login-black9.jpg')}
                style={styles.imagebackgoundLogin}
            />
        </View>
    );
}
export default BackgroundLogin

const styles = StyleSheet.create({
    imagebackgoundLogin:{
        position: 'absolute',
        width: '100%',
        height: '100%',
    }
});