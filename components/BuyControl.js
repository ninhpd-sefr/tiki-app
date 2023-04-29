import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import color from '../assets/constant/color'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CartScreens from '../screens/CartScreens';
import HomeScreens from '../screens/HomeScreens';
import ProductScreens from '../screens/ProductScreens';
import ProfileScreens from '../screens/ProfileScreens';





export default function BuyControl({navigation}) {
    return (
        
        <View style={styles.buyContainer}>
            <TouchableOpacity>
                <View style={[styles.buyButtonLove, styles.buyButton]}>
                    <MaterialIcons style={styles.buyIcon} name='favorite' />
                    <Text style={styles.buyText}>Yêu Thích</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={[styles.buyButtonPrice, styles.buyButton]}>
                    {/* <MaterialIcons style={styles.buyIcon} name='shopping-cart' /> */}
                    <Text style={[styles.buyText,styles.TextBold]}>Trả góp 0%</Text>
                    <Text style={styles.buyText}>Mua trước trả sau</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                  onPress={()=> navigation.navigate(CartScreens)}
            >
                <View style={[styles.buyButtonSubmit, styles.buyButton]}>
                    <Text style={[styles.buyText, styles.buyTextPrimary]}>Chọn mua</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    buyContainer: {
        backgroundColor: color.second,
        with: "100%",
        height: 50,
        flexDirection: 'row',
        alignItems: "center",
    },

    buyButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 8,
        borderColor: color.primary,
        paddingHorizontal: 2,
        borderRadius: 5
    },
    buyIcon: {
        fontSize: 20,
        color: color.primary,
    },
    TextBold:{
        fontSize: 21,
        fontWeight:'bold'
    },
    buyText: {
        color: color.primary
    }, buyTextPrimary: {
        fontSize: 20,
        color: color.white,
    },
    buyButtonLove: {
        flex: 2,
        borderWidth: 1,
        height: 40,
    },
    buyButtonPrice: {
        width: 130,
        flex: 3,
        borderWidth: 1,
    },
    buyButtonSubmit: {
        flex: 4,
        width: 150,
        backgroundColor: color.submit,
        paddingHorizontal: 20
    },

})