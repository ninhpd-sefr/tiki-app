import { StyleSheet, Text, View, Image } from 'react-native';

export default function HomeProductItem({ image, name, price}) {
  return (
    <View
      style={styles.itemContainer}>
      <Image
        style={styles.itemImg}
        source={image}
      />
      <Text style={styles.itemName} >{name}</Text>
      <Text style={styles.itemPrice} >{price} đ</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    width: 100,
    marginRight: 12,
    marginTop: 10,
  },
  itemImg: {
    width: 100,
    height: 120
  },
  itemName: {
    fontSize: 14,
    color: '#484848',
    marginVertical: 4,
    textAlign: "center"
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2a2a2a',
  },
})