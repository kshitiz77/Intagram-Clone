import { View, Text, Button, TouchableOpacity, SafeAreaView, StyleSheet, Image, TextInput } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements/dist/divider/Divider'

const LoginScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.loginScreenContainer}>
            <TouchableOpacity>
                <View style={styles.loginScreenCountryCodeContainer}>
                    <Text style={styles.loginScreenCountryCodeText}>English (United States)</Text>
                    <Image source={require('../assets/down-arrow.png')} style={styles.loginScreenDownArrowIcon} />
                </View>
            </TouchableOpacity>
            <View style={styles.loginScreenBodyContainer}>
                <Image source={require('../assets/header-logo.png')} style={styles.loginScreenInstagramLogo} />
                <TextInput style={styles.loginScreenEmailInputField} placeholderTextColor={'#ccc'} placeholder="Enter Your Email" />
                <View style={styles.loginScreenPasswordInputContainer}>
                    <TextInput style={styles.loginScreenPasswordInputField} placeholderTextColor={'#ccc'} placeholder="Enter Your Password" />
                    <TouchableOpacity style={styles.loginScreenPasswordIconContainer}>
                        <Image source={require('../assets/passwordHide.png')} style={styles.loginScreenPasswordIcon} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.loginScreenBtnContainer}>
                    <Text style={styles.loginScreenBtnText}>Log in</Text>
                </TouchableOpacity>
                <View style={styles.loginScreenBottomContainer}>
                    <Text style={styles.loginScreenBottomText}>Forgot your login details? </Text>
                    <TouchableOpacity>
                        <Text style={styles.loginScreenSignupLinkText}>Get Help logging in</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.loginScreenOrText}>OR</Text>
                <TouchableOpacity style={styles.loginScreenFBLoginContainer}>
                    <Image source={require('../assets/fb-logo.png')} style={styles.loginScreenFBLogo} />
                    <Text style={styles.loginScreenFBLoginText}>Login With Facebook</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.loginScreenBottomContainer}>
                <Text style={styles.loginScreenBottomText}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
                    <Text style={styles.loginScreenSignupLinkText}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    loginScreenContainer: {
        backgroundColor: '#000',
        flex: 1,
        paddingTop: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    loginScreenCountryCodeContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    loginScreenCountryCodeText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#898989'
    },
    loginScreenDownArrowIcon: {
        width: 12,
        height: 12,
        marginLeft: 5
    },
    loginScreenBodyContainer: {
        width: '85%',
        // marginHorizontal: 20,
    },
    loginScreenInstagramLogo: {
        alignSelf: 'center',
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    loginScreenEmailInputField: {
        backgroundColor: '#363b47',
        color: '#fff',
        borderRadius: 5,
        paddingHorizontal: 15,
        marginVertical: 8,
    },
    loginScreenPasswordInputContainer: {
        backgroundColor: '#363b47',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 8,
    },
    loginScreenPasswordInputField: {
        paddingHorizontal: 15,
        color: '#fff'
    },
    loginScreenPasswordIconContainer: {
        marginHorizontal: 12
    },
    loginScreenPasswordIcon: {
        width: 20,
        height: 20,
    },
    loginScreenBtnContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0095F6',
        marginVertical: 10,
        borderRadius: 5
    },
    loginScreenBtnText: {
        color: '#fff',
        paddingVertical: 12,
        fontWeight: '700',
        fontSize: 16
    },
    loginScreenOrText: {
        color: '#ccc',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600'
    },
    loginScreenFBLoginContainer: {
        backgroundColor: '#0095F6',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 10
    },
    loginScreenFBLoginText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
        marginLeft: 5
    },
    loginScreenFBLogo: {
        width: 25,
        height: 25
    },
    loginScreenBottomContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 15
    },
    loginScreenBottomText: {
        color: '#898989',
    },
    loginScreenSignupLinkText: {
        color: '#034efc',
    }
})
export default LoginScreen