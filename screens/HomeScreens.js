import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import HomeSectionComponent from '../components/HomeSectionComponent';
import dataDivice from '../constant/ConstantData'
import { useSelector, useDispatch } from "react-redux";
import { actAddNumber } from '../store/product/action';
import CartScreens from './CartScreens';
import color from '../assets/constant/color';

export default function HomeScreens({ navigation }) {
  const dispatch = useDispatch()
  const Product = useSelector(state => state.Product)
  console.log(Product);

  return (
    <View>
      <StatusBar barStyle="light-content" />
      <View style={styles.headerContainer}>
        <View style={styles.inputContainer}>
          <FontAwesome name='search' size={24} color={"#969696"} />
          <Text style={styles.inputText}>Bạn tìm gì hôm nay</Text>
        </View>
        <View style={styles.cartContainer}
        >
          <TouchableOpacity>
            <FontAwesome
              onPress={() => navigation.navigate(CartScreens)}
              name='shopping-cart' size={24} color={"#fff"} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Body container */}
      <View style={styles.bodyContainer}>
        <ScrollView>
          <HomeSectionComponent data={dataDivice.dataDivice} navigation={navigation} />
          <HomeSectionComponent data={dataDivice.dataBeauty} />
          <HomeSectionComponent data={dataDivice.dataElection} />
          <HomeSectionComponent data={dataDivice.dataClock} />

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

console.log();




