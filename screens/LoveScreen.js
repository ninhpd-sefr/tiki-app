import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import color from '../assets/constant/color'
import CartBody from '../components/CartBody'
import HomeScreens from './HomeScreens'



export default function LoveScreen({navigation}) {

  return (
    <ScrollView>
          <View style={styles.loveContainer}>
      <View style={styles.loveHeader}>
        <TouchableOpacity
          style={styles.loveHeaderBack}
          onPress={() => navigation.navigate(HomeScreens)}
        >
          <Text
            style={styles.loveHeaderBack}
          >
            X
          </Text>
        </TouchableOpacity>
        <Text
          style={styles.loveHeaderText}
        >Yêu thích</Text>
        <Text style={styles.loveHeaderFix}></Text>
      </View>
      {/*  */}
     
      <CartBody  love={true} />

    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  loveContainer: {
  }, loveHeader: {
    paddingTop: 60,
    paddingBottom: 5,
    backgroundColor: color.primary,
    flexDirection: 'row'
  }, loveHeaderFix: {
    flex: 1,
  }, loveHeaderText: {
    flex: 2,
    textAlign: 'center',
    fontWeight: '500',
    color: color.white,
    fontSize: 28,
  }, loveHeaderBack: {
    flex: 1,
    textAlign: 'left',
    fontWeight: '500',
    color: color.white,
    fontSize: 28,
    paddingLeft: 10
  },

})