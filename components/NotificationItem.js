import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function NotificationItem({ item }) {
    return (
        <TouchableOpacity>
            <View style={styles.itemContainer}>
                <View style={styles.itemTopContainer}>
                    <View
                        style={[
                            styles.itemTypeContainer,
                            {
                                backgroundColor: item.type === 1 ? '#fc820a' : '#dc3988',
                            },
                        ]}>
                        <MaterialCommunityIcons
                            name={item.type === 1 ? 'sale' : 'backup-restore'}
                            color="#fff"
                            size={22}
                        />
                    </View>
                    <View style={styles.itemTopTextContainer}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemDate}>{item.date}</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.itemDetail}>{item.detail}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#fff',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderBottomColor: '#ededed',
        borderBottomWidth: 1,
    },
    itemTopContainer: {
        flexDirection: 'row',
    },
    itemTypeContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemTopTextContainer: {
        marginRight: 40,
        marginLeft: 4,
    },
    itemName: {
        color: '#000',
        fontWeight: '500',
    },
    itemDate: {
        color: '#787878',
        fontSize: 12,
        marginTop: 8,
    },
    itemDetail: {
        color: '#787878',
        // fontSize: 12,
        marginTop: 12,
    },

})