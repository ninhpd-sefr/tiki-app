import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import HomeProductItem from './HomeProductItem';
import { useEffect, useState } from 'react';
import ProductScreens from '../screens/ProductScreens';
import { useDispatch } from 'react-redux';
import { actSeeProductDetail } from '../store/product/action';
const banner = require('../assets/OIP.jpg');
const item1 = require('../assets/OIPitem.jpg')
const item2 = require('../assets/2.jpg')
const item3 = require('../assets/3.jpg')
const item4 = require('../assets/4.jpg')

export default function HomeSectionComponent({
  navigation, dataAPI, listType, brand, img, index
}) {

  const data = {
    title: brand.name,
    filterList: listType,
    productList: dataAPI.filter(item => item.seller === brand._id),
    img: index == 0 ? img.iphone : index == 1 ? img.samsung : index == 2 ? img.xiaomi : img.asus
  }


  const dispatch = useDispatch()

  const dataSample = {
    title: "Điện thoại - máy tính bảng",
    filterList: [
      'Tất cả',
      'Điện thoại SmartPhone',
      'Máy tính bảng',
      'Điện thoại',
    ],
    productList: [{ "__v": 0, "_id": "6452051447c88ed4a14e658d", "delivery": "Giao tiết kiệm", "deliverySpeed": "FAST", "image": ["https://cdn.tgdd.vn/Products/Images/522/242153/ipad-pro-129-inch-2021-m1-1-org.jpg"], "oldPrice": "32.990.000", "price": "29.990.000", "seller": "6451da1a47c88ed4a14e655a", "title": "iPad Pro 12.9 inch - Wifi - 256GB - M1 - 2021 - Chính hãng", "type": "Máy tính bảng" }, { "__v": 0, "_id": "6452051f47c88ed4a14e6590", "delivery": "Giao tiết kiệm", "deliverySpeed": "FAST", "image": ["https://cdn.tgdd.vn/Products/Images/522/242153/ipad-pro-129-inch-2021-m1-1-org.jpg"], "oldPrice": "32.990.000", "price": "29.990.000", "seller": "6451da1a47c88ed4a14e655a", "title": "iPad Pro 12.9 inch - Wifi - 256GB - M1 - 2021 - Chính hãng", "type": "Máy tính bảng" }, { "__v": 0, "_id": "6452052d47c88ed4a14e6593", "delivery": "Giao tiết kiệm", "deliverySpeed": "FAST", "image": ["https://cdn.tgdd.vn/Products/Images/522/246391/ipad-mini-wifi-64gb-2021-3-org.jpg"], "oldPrice": "14.990.000", "price": "13.490.000", "seller": "6451da1a47c88ed4a14e655a", "title": "iPad mini Wifi 64GB - 2021 - Chính hãng", "type": "Máy tính bảng" }, { "__v": 0, "_id": "6452053647c88ed4a14e6596", "delivery": "Giao tiết kiệm", "deliverySpeed": "FAST", "image": ["https://cdn.tgdd.vn/Products/Images/522/212690/ipad-2020-wifi-32gb-1-org.jpg"], "oldPrice": "9.490.000", "price": "8.990.000", "seller": "6451da1a47c88ed4a14e655a", "title": "iPad 10.2 inch Wifi 32GB - 2020 - Chính hãng", "type": "Máy tính bảng" }]
  }
  const [dataGet, setDataGet] = useState(data)
  const [productFilter, setProductFilter] = useState(data.productList)
  const [selectIdx, setSelectIdx] = useState(0)


  useEffect(() => {
    if (!dataGet) {
      setDataGet(dataSample)
    }
  }, [data])

  const handleFilter = (type, idx) => {
    setSelectIdx(idx)
    if (type == 'Tất cả') {
      setProductFilter(data.productList)
      return
    }
    const name = dataGet.productList.filter(product => product.type === type);
    setProductFilter(name)
  }

  const handleSeeProduct = (item,img) => {
    const newItem = {
      ...item,
      image: img
    }
    dispatch(actSeeProductDetail(newItem))
    navigation.navigate(ProductScreens)
  }

  const filterImg = (type, image) => {
    let img = image.dt

    if (!image) {
      img = item4
    }

    if (type == 'Laptop') {
      img = image.lt
    } else if (type == 'Máy tính bảng') {
      img = image.mtb
    }

    return img
  }


  return (<View style={styles.sectionContainer}>
    <Text style={styles.sectionTiltle}>{dataGet.title}</Text>
    <Image
      style={styles.sectionImage}
      source={banner}
    />

    {/* filter list */}
    <ScrollView horizontal={true}>
      <View style={styles.filterContainer}>
        {dataGet.filterList.map((e, index) => (
          <TouchableOpacity
            onPress={() => handleFilter(e, index)}
          >
            <View
              key={index.toString()}
              style={
                index === selectIdx
                  ? styles.filterActiveButtonContainer
                  : styles.filterInactiveButtonContainer
              }>
              <Text
                style={
                  index === selectIdx
                    ? styles.filterActiveText
                    : styles.filterInactiveText
                }>
                {e}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>

    {/* List item */}

    <ScrollView horizontal={true}>
      <View style={styles.listItemContainer}>
        {
          productFilter.map((item, index) => (
            <View key={index.toString()}>
              <TouchableOpacity
                onPress={() => handleSeeProduct(item,filterImg(item.type,dataGet.img))}
              >
                <HomeProductItem
                  type={item.type}
                  name={item.title}
                  image={filterImg(item.type,dataGet.img)}
                  price={item.price}
                />
              </TouchableOpacity>
            </View>
          ))
        }

      </View>
    </ScrollView>
    {/*  */}
    <View style={styles.seeMoreContainer}>
      <Text style={styles.seeMoreText}>XEM THÊM 636 SẢN PHẨM </Text>
    </View>


  </View>)
}

const styles = StyleSheet.create({

  sectionContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 12
  },
  sectionTiltle: {
    fontWeight: "700",
    fontSize: 16,
    color: "#2f2f2f",
    marginVertical: 12
  },
  sectionImage: {
    width: 370,
    height: 130,
    borderRadius: 4
  },
  //
  filterContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  filterActiveButtonContainer: {
    backgroundColor: '#242424',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    marginRight: 10,
  },
  filterInactiveButtonContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    borderColor: '#5a5a5a',
    borderWidth: 1,
    marginRight: 10,
  },
  filterActiveText: {
    color: '#fff',
  },
  filterInactiveText: {
    color: '#5a5a5a',
  },
  // 
  listItemContainer: {
    flexDirection: "row",
    flexWrap: 'wrap'
  },

  seeMoreContainer: {
    marginTop: 10,
    padding: 12,
    borderTopWidth: 0.6,
    borderTopColor: '#ededed',
    alignItems: 'center',
  },
  seeMoreText: {
    color: '#0e45b4',
  },

});
