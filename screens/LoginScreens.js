import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react';
import { Image } from 'react-native';
import { useState } from 'react';
import { TextInput } from 'react-native';
import color from '../assets/constant/color';
import HomeScreens from './HomeScreens';


const LoginScreens = () => {
    const [nameAccount, setNameAccount] = useState('');
    const [passwordAccount, setPasswordAccount] = useState('');


    const [isRegister, SetIsRegister] = useState(false)

    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({ tabBarVisible: false });
    }, [navigation]);

    const handleLogin = ()=>{
        navigation.navigate(HomeScreens)
    }

    return (
        <View style={styles.loginContainer}>
            <View style={styles.loginImgContainer}>
                <Image
                    style={{ width: '100%', height: '100%' }}
                    source={{ uri: 'https://senshop.com.vn/wp-content/uploads/2019/05/sinh-nhat-tiki.png' }}
                />
            </View>

            {
                isRegister ?
                    // Register
                    <View style={styles.loginBody}>
                        <Text style={styles.loginBodyHeader}>Xin chào,</Text>
                        <Text style={styles.loginBodyHeaderSub}>Hãy đăng kí để tham gia mua hàng</Text>
                        <View style={styles.loginBodyInput}>
                            <TextInput
                                style={styles.input}
                                placeholder="Tên tài khoản ..."
                                placeholderTextColor="#666"
                                onChangeText={(e) => setNameAccount(e.target.value)}
                                value={nameAccount}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Mật khẩu ..."
                                placeholderTextColor="#666"
                                onChangeText={(e) => setPasswordAccount(e.target.value)}
                                value={passwordAccount}
                            />
                            <View style={styles.register}>
                                
                                <TouchableOpacity style={styles.button}>
                                    <Text style={styles.text}>Đăng kí</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                onPress={()=> SetIsRegister(false)}
                                style={styles.button}>
                                    <Text style={styles.text}>Đăng nhập nếu có tài khoản</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View> :
                    // Login
                    <View style={styles.loginBody}>
                        <Text style={styles.loginBodyHeader}>Xin chào,</Text>
                        <Text style={styles.loginBodyHeaderSub}>Đăng nhập hoặc
                            <Text style={styles.loginBodyHeaderMove}
                                onPress={() => SetIsRegister(true)}
                            > đăng kí tài khoản</Text>
                        </Text>
                        <View style={styles.loginBodyInput}>
                            <TextInput
                                style={styles.input}
                                placeholder="Tên tài khoản ..."
                                placeholderTextColor="#666"
                                onChangeText={(e) => setNameAccount(e.target.value)}
                                value={nameAccount}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Mật khẩu ..."
                                placeholderTextColor="#666"
                                onChangeText={(e) => setPasswordAccount(e.target.value)}
                                value={passwordAccount}
                            />
                            <TouchableOpacity
                            onPress={handleLogin}
                            style={styles.button}>
                                <Text style={styles.text}>Đăng nhập</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            }
        </View>
    )
}

export default LoginScreens

const styles = StyleSheet.create({
    loginContainer: {
        paddingTop: 30,
        flex: 1,
    }, loginImgContainer: {
        flex: 3,
    }, loginBody: {
        padding: 20,
        flex: 7,
    }, loginBodyHeader: {
        fontSize: 30,
        fontWeight: '500',
        marginBottom: 10
    }, loginBodyHeaderSub: {
        fontSize: 18,
        marginBottom: 20
    }, loginBodyHeaderMove: {
        color: color.primary
    }, input: {
        borderBottomWidth: 1,
        borderBottomColor: color.textGray,
        color: color.textGray,
        fontSize: 28,
        letterSpacing: 1,
        paddingVertical: 10,
        fontWeight: '400',
        opacity: 0.7
    },
    button: {
        marginTop: 20,
        backgroundColor: color.submit,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 14
    },
    text: {
        color: color.white,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    }, register: {
        // flexDirection: 'row'
    }
})