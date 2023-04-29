import { View, Text, ScrollView, StyleSheet ,TouchableOpacity} from 'react-native'
import React from 'react'
import CartItem from './CartItem'
const item4 = require('../assets/4.jpg')


export default function CartBody({
    love
}) {

    const data = [
        {
            title: "Iphone 12 Promax - chính hãng",
            deliverySpeed: "FAST",
            delivery: "Giao tiết kiệm",
            number: 2,
            price: "150.000",
            oldPrice: "200.000",
            img: item4
        },
        {
            title: "Iphone 12 Promax - chính hãng",
            deliverySpeed: "FAST",
            delivery: "Giao tiết kiệm",
            number: 2,
            price: "150.000",
            oldPrice: "200.000",
            img: item4
        },

        {
            title: "Iphone 12 Promax - chính hãng",
            deliverySpeed: "FAST",
            delivery: "Giao tiết kiệm",
            number: 2,
            price: "150.000",
            oldPrice: "200.000",
            img: item4
        },

        {
            title: "Iphone 12 Promax - chính hãng",
            deliverySpeed: "FAST",
            delivery: "Giao tiết kiệm",
            number: 2,
            price: "150.000",
            oldPrice: "200.000",
            img: item4
        },
        ,

        {
            title: "Iphone 12 Promax - chính hãng",
            deliverySpeed: "FAST",
            delivery: "Giao tiết kiệm",
            number: 2,
            price: "150.000",
            oldPrice: "200.000",
            img: item4
        },

    ]


    return (
        <ScrollView>
            <View style={styles.cartBody}>
                {
                    love ? data.map((item, index) => (
                        <TouchableOpacity>
                            <CartItem love={love} key={index} item={item} />
                        </TouchableOpacity>
                    )) : data.map((item, index) => (
                        <CartItem love={love} key={index} item={item} />
                    ))
                }
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    cartBody: {
        paddingTop: 10
    }
})