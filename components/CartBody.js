import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import ProductScreens from '../screens/ProductScreens'
import { actSeeProductDetail } from '../store/product/action'
const item4 = require('../assets/4.jpg')

export default function CartBody({
    love,HandleDeleteProduct,Cart
}) {
    // console.log('Body:', Cart);
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const [data, setData] = useState(Cart)

    useEffect(() => {
        setData(Cart)
    }, [Cart])


    

    return (
        <ScrollView>
            {Cart ? <View style={styles.cartBody}>
                {
                    love ? data.map((item, index) => (
                        <TouchableOpacity
                            onPress={()=>{
                                console.log(item);
                                dispatch(actSeeProductDetail(item))
                                navigation.navigate(ProductScreens)
                            }}
                        >
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