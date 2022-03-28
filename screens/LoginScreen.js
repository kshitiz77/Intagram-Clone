import { View, Text, Button, TouchableOpacity, SafeAreaView, StyleSheet, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../styles'

const LoginScreen = ({ navigation }) => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })


    const [passwordHideIcon, setPasswordHideIcon] = useState(require('../assets/passwordHide.png'));
    const [securePassword, setSecurePassword] = useState(true)

    const submitUserDetails = (event) => {
        if (user.email === "") {
            console.log('Please Enter Your Email Address');
        } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email))) {
            console.log('Please Enter Your Correct Email Address');
        } else if (user.password === "") {
            console.log('Please Enter Your Password');
        } else if (user.password.length < 6) {
            console.log('Please Enter Correct Password');
        } else {
            console.log(user);
            navigation.navigate('HomeScreen')
        }
    }

    const showPassword = () => {
        if (securePassword === true) {
            setSecurePassword(false);
            setPasswordHideIcon(require('../assets/passwordShow.png'));
        } else {
            setSecurePassword(true);
            setPasswordHideIcon(require('../assets/passwordHide.png'));
        }
    }
    return (
        <SafeAreaView style={styles.loginScreenContainer}>
            <TouchableOpacity>
                <View style={styles.loginScreenCountryCodeContainer}>
                    <Text style={styles.loginScreenCountryCodeText}>English (United States)</Text>
                    <Image source={require('../assets/down-arrow.png')} style={styles.loginScreenDownArrowIcon} />
                </View>
            </TouchableOpacity>
            <Image source={require('../assets/header-logo.png')} style={styles.loginScreenInstagramLogo} />
            <View style={styles.loginScreenBodyContainer}>
                <TextInput autoCapitalize='none' autoCorrect={false} value={user.email} style={styles.loginScreenEmailInputField} onChangeText={(event) => setUser({...user, email:event})} placeholderTextColor={'#ccc'} placeholder="Enter Your Email" />
                <View style={styles.loginScreenPasswordInputContainer}>
                    <TextInput autoCapitalize='none' maxLength={10} autoCorrect={false} value={user.password} onChangeText={(event) => setUser({...user, password:event})} secureTextEntry={securePassword} style={styles.loginScreenPasswordInputField} placeholderTextColor={'#ccc'} placeholder="Enter Your Password" />
                    <TouchableOpacity style={styles.loginScreenPasswordIconContainer} onPress={showPassword}>
                        <Image source={passwordHideIcon} style={styles.loginScreenPasswordIcon} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.loginScreenBtnContainer} onPress={submitUserDetails}>
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

export default LoginScreen