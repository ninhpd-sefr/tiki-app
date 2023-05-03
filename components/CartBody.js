import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'
const item4 = require('../assets/4.jpg')

export default function CartBody({
    love,navigation,HandleDeleteProduct,Cart
}) {
    // console.log('Body:', Cart);
    
    const [data, setData] = useState(Cart)

    useEffect(() => {
        setData(Cart)
    }, [Cart])


    

    return (
        <ScrollView>
            {Cart ? <View style={styles.cartBody}>
                {
                    love ? data.map((item, index) => (
                        <TouchableOpacity>
                            <CartItem key={index} HandleDeleteProduct={HandleDeleteProduct} navigation={navigation}  love={love} item={item} />
                        </TouchableOpacity>
                    )) : 
                    
                    data.map((item, index) => (
                        <TouchableOpacity >
                        <CartItem key={index} HandleDeleteProduct={HandleDeleteProduct} navigation={navigation} item={item} />
                        </TouchableOpacity>
                    ))
                }
            </View> 
            : <View>Loading ...</View>}
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    cartBody: {
        paddingTop: 10
    }
})