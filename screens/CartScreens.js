import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import color from '../assets/constant/color'
import CartItem from '../components/CartItem'
import CartBody from '../components/CartBody'
import HomeScreens from './HomeScreens'



export default function CartScreens({
  navigation
}) {

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
     
      <CartBody />

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

})