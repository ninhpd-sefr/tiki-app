import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import color from '../assets/constant/color';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import BuyControl from '../components/BuyControl';
import { useDispatch, useSelector } from 'react-redux';
import { actAddProductToCart } from '../store/product/action';
const item4 = require('../assets/productItem.jpg')
export default function ProductScreens({ navigation }) {
  return (
    <View style={styles.productContainer}>
      <View style={styles.productImg}>
        <Image style={styles.image} source={item4} />
      </View>
      <View style={styles.productInfo}>
        <Text style={styles.productTitle}>Xe đạp trẻ em Thống Nhất Kitten TE20</Text>
        <Text style={styles.productFeedback}>Chưa có đánh giá</Text>
        <View style={styles.productContainerPrice}>
          <Text style={styles.productPrice}>2.000.000 đ</Text>
          <View style={styles.productPriceOldContainer}>
            <Text style={styles.productPriceOld}>2.500.000 đ</Text>
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