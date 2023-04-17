import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import HomeProductItem from './HomeProductItem';
import { useEffect, useState } from 'react';
const banner = require('../assets/OIP.jpg');
const item1 = require('../assets/OIPitem.jpg')
const item2 = require('../assets/2.jpg')
const item3 = require('../assets/3.jpg')
const item4 = require('../assets/4.jpg')

export default function HomeSectionComponent({
  data
}) {
  const dataSample = {
    title: "Điện thoại - máy tính bảng",
    filterList: [
      'Tất cả',
      'Điện thoại SmartPhone',
      'Máy tính bảng',
      'Điện thoại',
    ],
    imgList: [
      { image1: item1, image2: item2 },
      { image1: item2, image2: item3 },
      { image1: item3, image2: item4 },
      { image1: item4, image2: item1 },
    ]
  }
  const [dataGet, setDataGet] = useState(data)

  useEffect(() => {
    if (!dataGet) {
      setDataGet(dataSample)
    }
  }, [data])


  return (<View style={styles.sectionContainer}>
    <Text style={styles.sectionTiltle}>{dataGet.title}</Text>
    <Image
      style={styles.sectionImage}
      source={banner}
    />

    {/* filter list */}
    <ScrollView horizontal={true}>
      <View style={styles.filterContainer}>
        {dataSample.filterList.map((e, index) => (
          <View
            key={index.toString()}
            style={
              index === 0
                ? styles.filterActiveButtonContainer
                : styles.filterInactiveButtonContainer
            }>
            <Text
              style={
                index === 0
                  ? styles.filterActiveText
                  : styles.filterInactiveText
              }>
              {e}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>

    {/* List item */}

    <ScrollView horizontal={true}>
      <View style={styles.listItemContainer}>
        {dataSample.imgList.map((e, index) => (
          <View key={index.toString()}>
            <TouchableOpacity>
              <HomeProductItem
                name="Iphone 13 Pro Max"
                image={e.image1}
                price="8.699.000đ"
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <HomeProductItem
                name="Iphone 13 Pro Max"
                image={e.image2}
                price="8.699.000đ"
              />
            </TouchableOpacity>

          </View>
        ))}
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
