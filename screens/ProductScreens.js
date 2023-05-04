import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import color from '../assets/constant/color';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import BuyControl from '../components/BuyControl';
import { useDispatch, useSelector } from 'react-redux';
import { actAddProductToCart } from '../store/product/action';
const item4 = require('../assets/productItem.jpg')
export default function ProductScreens({ 
  navigation
 }) {

  const currentProduct = useSelector(state => state.Product.currentProduct)

  
  return (
    <View style={styles.productContainer}>
      <View style={styles.productImg}>
        <Image style={styles.image} source={currentProduct.image ?currentProduct.image : currentProduct.img} />
      </View>
      <View style={styles.productInfo}>
        <Text style={styles.productTitle}>{currentProduct.title}</Text>
        <Text style={styles.productFeedback}>Chưa có đánh giá</Text>
        <Text style={styles.productFeedback}>{currentProduct.type}</Text>
        <View style={styles.productContainerPrice}>
          <Text style={styles.productPrice}>{currentProduct.price}đ</Text>
          <View style={styles.productPriceOldContainer}>
            <Text style={styles.productPriceOld}>{currentProduct.price.replace(/^./, Number(currentProduct.price.charAt(0)) + 1)}đ</Text>
            <Text> - 37%</Text>
          </View>
        </View>
      </View>
      {/*  */}
      <BuyControl
        navigation={navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
  productContainer: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: color.white,
  },
  productImg: {
    flex: 1,
  }, image: {
    width: '100%',
    height: '100%',


  },
  productInfo: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 20,
    borderTopWidth: 3,
    borderTopColor: color.second,
  }, productTitle: {
    fontSize: 20
  }, productFeedback: {
    marginTop: 20,
    color: color.textGray
  },
  productContainerPrice: {

  },
  productPrice: {
    marginTop: 30,
    fontSize: 30,
    fontWeight: "bold",
    color: color.primary
  }, productPriceOldContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  }
  , productPriceOld: {
    fontSize: 20,
    fontWeight: "bold",
    textDecorationLine: 'line-through',
  }
})