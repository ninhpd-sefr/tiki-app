import { View, Text, StyleSheet, Image, Button } from 'react-native'
import React from 'react'
import color from '../assets/constant/color';

export default function CartItem({
    item, love
}) {
    console.log("love: ", love);


    return (
        <View style={styles.cartItemContainer}>
            <View
                style={styles.cartItemImgContainer}
            >
                <Image
                    style={styles.cartItemImg}
                    source={item.img}
                />
            </View>

            <View
                style={styles.cartInfor}
            >
                <Text
                    style={styles.cartInforTitle}
                >{item.title}</Text>
                <View
                    style={styles.cartInforDelivery}

                >
                    <Text
                        style={styles.cartInforDeliverySpeed}
                    >{item.deliverySpeed}</Text>
                    <Text
                        style={styles.cartInforDeliveryType}
                    >{item.delivery.toUpperCase()}</Text>
                </View>

                <View
                    style={styles.cartInforPrice}

                >
                    <Text
                        style={styles.cartInforPriceNew}
                    >{item.price} đ</Text>
                    <Text
                        style={styles.cartInforPriceOld}
                    > {item.oldPrice} đ</Text>
                </View>

                {
                    love ?  <View></View>: <View style={styles.cartInforBottom}>
                    <Text
                        style={styles.cartInforQuantity}
                    >Số lượng: {item.number}
                    </Text>
                    <Button
                        title="Xóa"
                    />
                </View> 
                }


            </View>


        </View>
    )
}


const styles = StyleSheet.create({
    cartItemContainer: {
        height: 140,
        width: "100%",
        flexDirection: 'row'
    }, cartItemImgContainer: {
        padding: 2,
        flex: 1
    },
    cartItemImg: {
        width: 100,
        height: 120
    }, cartInfor: {
        flex: 3,
        paddingLeft: 20
    }, cartInforTitle: {
        fontSize: 16
    }, cartInforDelivery: {
        marginTop: 10,
        flexDirection: 'row'
    }, cartInforDeliverySpeed: {
        fontSize: 16,
        fontWeight: 'bold',
        color: color.yellow
    }, cartInforDeliveryType: {
        color: color.green,
        marginLeft: 4
    }, cartInforPrice: {
        flexDirection: 'row',
        marginTop: 10
    }, cartInforPriceNew: {
        color: color.submit,
        fontSize: 20
    }, cartInforPriceOld: {
        marginLeft: 5,
        color: color.textGray,
        textDecorationLine: 'line-through'
    }, cartInforBottom: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 10
    }, cartInforQuantity: {
        fontSize: 15
    }
})
