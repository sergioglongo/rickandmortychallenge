import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { styles } from '../themes/globalTheme';

const SearchScreen = () => {
    return (
        <>
            <Image
                source={require('../assets/rick-morty-search.jpg')}
                style={styles.imagebackgound}
            />
            <View>
                <Text>SearchScreen</Text>
            </View>
        </>
    );
}

export default SearchScreen