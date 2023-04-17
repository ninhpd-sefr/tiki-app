import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function ProfileItem({ icon, name }) {
    return (
        <TouchableOpacity>
            <View style={styles.itemContainer}>
                <MaterialCommunityIcons name={icon} size={26} color="#1e1e1e" />
                <Text style={[styles.itemText, { marginLeft: icon ? 20 : 0 }]}>{name}</Text>
                <FontAwesome name="angle-right" size={26} color="#1e1e1e" />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    //
    itemContainer: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
    },
    itemText: {
        flex: 1,
        color: '#1e1e1e',
    },
})