import { View, Text, StyleSheet, Image, Button } from 'react-native'
import React from 'react'
import color from '../assets/constant/color';
import { useDispatch } from 'react-redux';
import { actRemoveProductToCart } from '../store/product/action';
import CartScreens from '../screens/CartScreens';
import { useNavigation } from '@react-navigation/native';
import HomeScreens from '../screens/HomeScreens';


export default function CartItem({
    item, love,navigation,HandleDeleteProduct
}) {
    const dispatch = useDispatch()
    const deleteProduct = () => {
        HandleDeleteProduct()
        dispatch(actRemoveProductToCart(2))
        navigation.navigate(CartScreens, { key: new Date().getTime() })
    }

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
                    > {item.price.replace(/^./, Number(item.price.charAt(0)) + 1)} đ</Text>
                </View>

                {
                    love ? <View></View> :
                     <View style={styles.cartInforBottom}>
                        <Text
                            style={styles.cartInforQuantity}
                        >Số lượng: {item.number}
                        </Text>
                        <Button
                            onPress={deleteProduct}
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
