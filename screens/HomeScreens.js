import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import HomeSectionComponent from '../components/HomeSectionComponent';
import dataDivice from '../constant/ConstantData'
import { useSelector, useDispatch } from "react-redux";
import { actAddNumber } from '../store/product/action';
import ProductScreens from './ProductScreens';

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
        <View style={styles.cartContainer}>
          <FontAwesome name='shopping-cart' size={24} color={"#fff"} />
        </View>
      </View>

      {/* Body container */}
      <View style={styles.bodyContainer}>
        <ScrollView>
          <Text
            onPress={() => navigation.navigate(ProductScreens)}
          >Ninh Đăng Phạm {Product.total}</Text>

          <HomeSectionComponent data={dataDivice.dataDivice} />
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
    backgroundColor: "#1e88e5"

  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: "#fff",
    flex: 1,
    marginLeft: 10,
    alignItems: "center",
    marginBottom: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 2
  },
  inputText: {
    color: "#969696",
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
    backgroundColor: "#fff"
  }
});

console.log();




