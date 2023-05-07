import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import HomeSectionComponent from '../components/HomeSectionComponent';
import image from '../constant/ConstantData'
import CartScreens from './CartScreens';
import color from '../assets/constant/color';
import {getAllProductFromAPI, getAllSellerFromAPI} from '../services';
import { useState } from 'react';
import { useEffect } from 'react';
import LoginScreens from './LoginScreens';


export default function HomeScreens({ navigation }) {
  

  const [dataAPI, setDataAPI] = useState()
  const [sellerAPI, setSellerAPI] = useState()
  let listType = ['Tất cả']

  useEffect(() => {
    getAllProductFromAPI().then(data => {
      setDataAPI(data)
    })
    getAllSellerFromAPI().then(seller=>{
      setSellerAPI(seller);
    })

  }, [])


  if (!dataAPI) {
    return
  }


  dataAPI.map((item, index) => {
    listType.push(item.type)
  })
  listType =  [...new Set(listType)]
  


  return (
    <View>
      <StatusBar barStyle="light-content" />
      <View>
      </View>
      <View style={styles.headerContainer}>
        <View style={styles.inputContainer}>
          <FontAwesome
            onPress={() =>{
              console.log('ninh');
              
              navigation.navigate(LoginScreens)
            }}
            name='search' size={24} color={"#969696"} />
          <Text style={styles.inputText}
          >Bạn tìm gì hôm nay</Text>
        </View>
        <View style={styles.cartContainer}
        >
          <TouchableOpacity>
            <FontAwesome
              onPress={() => navigation.navigate(CartScreens, { key: new Date().getTime() })}
              name='shopping-cart' size={24} color={"#fff"} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Body container */}
      <View style={styles.bodyContainer}>
        <ScrollView>
          {
            sellerAPI.map((brand,index)=>(
              <HomeSectionComponent
               brand={brand} img ={image.image} index ={index} key={index} dataAPI={dataAPI} listType={listType} navigation={navigation} />
            ))
          }
        </ScrollView>
      </View>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    paddingTop: 50,
    paddingBottom: 4,
    backgroundColor: color.primary

  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: color.white,
    flex: 1,
    marginLeft: 10,
    alignItems: "center",
    marginBottom: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 2
  },
  inputText: {
    color: color.textGray,
    fontSize: 14,
    marginLeft: 8,
    fontWeight: "500"
  },
  cartContainer: {
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  // 
  bodyContainer: {
    backgroundColor: color.white,
    paddingBottom: 200
  }
});




