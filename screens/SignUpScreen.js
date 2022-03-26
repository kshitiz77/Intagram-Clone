import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native'
import React, {useState} from 'react'
import { styles } from '../styles'

const SignUpScreen = ({navigation}) => {
  const [passwordHideIcon, setPasswordHideIcon] = useState(require('../assets/passwordHide.png'));
    const [securePassword, setSecurePassword] = useState(true)

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
            <View style={styles.loginScreenBodyContainer}>
    <Image source={require('../assets/header-logo.png')} style={styles.loginScreenInstagramLogo} />
            <TextInput style={styles.loginScreenEmailInputField} placeholderTextColor={'#ccc'} placeholder="Enter Your Username" />
                <TextInput keyboardType="email-address" style={styles.loginScreenEmailInputField} placeholderTextColor={'#ccc'} placeholder="Enter Your Email" />
                <View style={styles.loginScreenPasswordInputContainer}>
                    <TextInput secureTextEntry={securePassword} style={styles.loginScreenPasswordInputField} placeholderTextColor={'#ccc'} placeholder="Enter Your Password" />
                    <TouchableOpacity style={styles.loginScreenPasswordIconContainer} onPress={showPassword}>
                        <Image source={passwordHideIcon} style={styles.loginScreenPasswordIcon} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.loginScreenBtnContainer}>
                    <Text style={styles.loginScreenBtnText}>Sign up</Text>
                </TouchableOpacity>
                <Text style={styles.loginScreenOrText}>OR</Text>
                <TouchableOpacity style={styles.loginScreenFBLoginContainer}>
                    <Image source={require('../assets/fb-logo.png')} style={styles.loginScreenFBLogo} />
                    <Text style={styles.loginScreenFBLoginText}>Sign up With Facebook</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.loginScreenBottomContainer}>
                <Text style={styles.loginScreenBottomText}>You have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={styles.loginScreenSignupLinkText}>Log in </Text>
                </TouchableOpacity>
            </View>
            </SafeAreaView>
  )
}

export default SignUpScreen