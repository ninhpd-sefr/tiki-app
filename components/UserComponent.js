import React from 'react';
import { StyleSheet, View, Text, StatusBar, TouchableOpacity } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default function UserComponent() {
    return (
        <TouchableOpacity>
            <View style={styles.userContainer}>
                <View style={styles.avatarContainer}>
                    <MaterialIcons name="person" size={26} color="#fff" />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.welcomeText}>Chào mừng bạn đến với Tiki</Text>
                    <Text style={styles.authText}>Đăng nhập/Đăng ký</Text>
                </View>
                <FontAwesome name="angle-right" size={26} color="#1e88e5" />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    userContainer: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 22,
        alignItems: 'center',
    },
    avatarContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1e88e5',
    },
    textContainer: {
        flex: 1,
        marginLeft: 20,
    },
    welcomeText: {
        color: '#828282',
    },
    authText: {
        color: '#1e88e5',
        fontSize: 18,
        fontWeight: '500',
    },

})