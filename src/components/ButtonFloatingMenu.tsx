import { DrawerScreenProps } from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../themes/globalTheme';

interface Props extends DrawerScreenProps<any, any> { }

const ButtonFloatingMenu = (props:Props) => {
    return (
        <View style={{ ...styles.buttonFloatingMenu }}>
        <TouchableOpacity>
            <Icon name="menu-outline"
                onPress={() => (props.navigation.toggleDrawer())}
                size={40} color={colors.primary} />
        </TouchableOpacity>
    </View>
    );
}
export default ButtonFloatingMenu

const styles = StyleSheet.create({
    buttonFloatingMenu:{
        position:'absolute',
        top:10,
        right:15,
        borderRadius:50,
        borderWidth:1,
        borderColor:colors.secondary,
        backgroundColor: colors.neutral
    },
});