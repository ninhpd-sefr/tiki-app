import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Button, Alert } from 'react-native'
import React from 'react'
import color from '../assets/constant/color'
import CartItem from '../components/CartItem'
import CartBody from '../components/CartBody'
import HomeScreens from './HomeScreens'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { actAddNumber, actClearCart } from '../store/product/action'


export default function CartScreens({
  navigation
}) {

  const dispatch = useDispatch()

  const Cart = useSelector(state => state.Product.cart)

  const HandleDeleteProduct = () => {
    console.log('da xoa');
  }
  let totalPrice = 0;

  Cart.map((item  ) => {
    totalPrice += Number(item.price)
  })

  // console.log(totalPrice);



  const handleSubmit = () =>{
    Alert.alert(
      'Xác nhận đặt hàng ?',
      'Đơn hàng sẽ được gửi tới người bán',
      [
        {
          text: 'Không',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        {
          text: 'Có',
          onPress: () =>  {
            dispatch(actClearCart())
            navigation.navigate(HomeScreens)
          }
        }
      ],
      { cancelable: false }
    );
  }


  return (
    <ScrollView>
      <View style={styles.cartContainer}>
        <View style={styles.cartHeader}>
          <TouchableOpacity
            style={styles.cartHeaderBack}
          >
            <Text
              style={styles.cartHeaderBack}
              onPress={() => navigation.navigate(HomeScreens)}
            >
              X
            </Text>
          </TouchableOpacity>
          <Text
            style={styles.cartHeaderText}
          >Giỏ hàng</Text>
          <Text style={styles.cartHeaderFix}></Text>
        </View>
        {/*  */}

        {
          Cart != [] ?
            <View>
              <CartBody HandleDeleteProduct={HandleDeleteProduct} navigation={navigation} Cart={Cart} />
              <View style={styles.cartTotal}>
              <Text style={styles.cartTotalText}>Tổng tiền : {totalPrice}.000 đ</Text>
                <Button
                  onPress={handleSubmit}
                  title='submit'
                  color={color.submit}
                />
              </View>
            </View>
            : <Text style={styles.cartTotalEmpty}>Giỏ hàng trống</Text>
        }




      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  cartContainer: {
  }, cartHeader: {
    paddingTop: 60,
    paddingBottom: 5,
    backgroundColor: color.primary,
    flexDirection: 'row'
  }, cartHeaderFix: {
    flex: 1,
  }, cartHeaderText: {
    flex: 2,
    textAlign: 'center',
    fontWeight: '500',
    color: color.white,
    fontSize: 28,
  }, cartHeaderBack: {
    flex: 1,
    textAlign: 'left',
    fontWeight: '500',
    color: color.white,
    fontSize: 28,
    paddingLeft: 10
  },
  cartTotal: {
    bottom: 0,
    backgroundColor: color.primary,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  cartTotalText: {
    color: color.white,
    fontSize: 20,
    fontWeight: 'bold'
  }, cartTotalSubmit: {
    color: 'red',
  },cartTotalEmpty:{
    marginTop:50,
    fontSize:50,
    textAlign:'center',
    color:color.textBlack
  
  }

})