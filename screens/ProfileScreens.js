import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import Header from '../components/HeaderComponent';
import ProfileItem from '../components/ProfileItem';
import UserComponent from '../components/UserComponent';


const ProfileScreens = () => {
  return (
    <View style={styles.screenContainer}>
      <StatusBar barStyle="light-content" />
      {/*  */}
      <Header title="Cá nhân" />
      {/*  */}
      <View style={styles.bodyContainer}>
       <UserComponent/>
        {/*  */}
        <View style={styles.divider} />
        <ProfileItem icon="format-list-bulleted" name="Quản lý đơn hàng" />
        <ProfileItem icon="cart-outline" name="Sản phẩm đã mua" />
        <ProfileItem icon="eye-outline" name="Sản phẩm đã xem" />
        <ProfileItem icon="heart-outline" name="Sản phẩm yêu thích" />
        <ProfileItem icon="bookmark-outline" name="Sản phẩm mua sau" />
        <ProfileItem icon="star-outline" name="Sản phẩm đánh giá" />
        {/*  */}
        <View style={styles.divider} />
        <ProfileItem name="Ưu đãi cho chủ thẻ ngân hàng" />
        <ProfileItem name="Cài đặt" />
        {/*  */}
        <View style={styles.divider} />
        <ProfileItem icon="headphones" name="Hỗ trợ" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: '#ededed',
  },
  
  //
  itemContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },
  itemText: {
    flex: 1,
    color: '#1e1e1e',
  },
  //
  divider: {
    height: 10,
  },
});

export default ProfileScreens;
