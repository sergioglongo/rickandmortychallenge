import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import {DropDownFilterInterface} from '../interfaces/dropDownInterface'
import { colors } from '../themes/globalTheme';



const DropDownFilter = ({data,value,onChange}:DropDownFilterInterface) => {
    
    const _renderItem = (item: any) => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>
            </View>
        );
    }
    
    return (
        <View>
            <Dropdown
                    style={styles.dropdown}
                    containerStyle={styles.shadow}
                    data={data}
                    searchPlaceholder="status"
                    labelField="label"
                    valueField="value"
                    placeholder="all"
                    value={value}
                    onChange={onChange}
                    renderItem={item => _renderItem(item)}
                />
        </View>
    );
}
export default DropDownFilter

const styles = StyleSheet.create({
    dropdown: {
        backgroundColor: colors.neutral,
        borderBottomColor: colors.primary,
        borderBottomWidth: 0.5,
        marginTop: 5,
        width: 90,
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    item: {
        paddingVertical: 3,
        paddingHorizontal: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    textItem: {
        flex: 1,
        fontSize: 16,
        color: colors.primary,
    },
});