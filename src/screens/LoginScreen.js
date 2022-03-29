import { View, Text, Button, TouchableOpacity, SafeAreaView, StyleSheet, Image, TextInput, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../styles/styles'
import auth from '@react-native-firebase/auth'

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordHideIcon, setPasswordHideIcon] = useState(require('../assets/images/passwordHide.png'));
    const [securePassword, setSecurePassword] = useState(true);
    const [loginBtn, setLoginBtn] = useState(true)
    const [loading, setLoading] = useState(false)


    if(loading){
        return(
            <SafeAreaView style={styles.activityIndicator}>
                <ActivityIndicator size="large" color="#fff" />
            </SafeAreaView>
        )
    }

    const handleEmailField = (email) =>{
        setEmail(() => email);
        if(email !== '' && password !== ''){
            setLoginBtn(false)
        }else{
            setLoginBtn(true)
        }
    }

    const handlePasswordField = (password) =>{
        setPassword(() => password);
        if( password !== '' && email !== ''){
            setLoginBtn(false)
        }else{
            setLoginBtn(true)
        }
    }

    const submitUserDetails = async (event) => {
        setLoading(true)
        if (email === "") {
            console.log('Please Enter Your Email Address');
        } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            console.log('Please Enter Your Correct Email Address');
        } else if (password === "") {
            console.log('Please Enter Your Password');
        } else if (password.length < 6) {
            console.log('Please Enter Correct Password');
        } else {
            try{
                const result = await auth().signInWithEmailAndPassword(email, password)
                    setLoading(false)
                    navigation.navigate('HomeScreen')
            }catch(error){
                alert('Something went worng');
                setLoading(false)
                navigation.navigate('LoginScreen')
            }
        }
    }

    const showPassword = () => {
        if (securePassword === true) {
            setSecurePassword(false);
            setPasswordHideIcon(require('../assets/images/passwordShow.png'));
        } else {
            setSecurePassword(true);
            setPasswordHideIcon(require('../assets/images/passwordHide.png'));
        }
    }
    return (
        <SafeAreaView style={styles.loginScreenContainer}>
            <TouchableOpacity>
                <View style={styles.loginScreenCountryCodeContainer}>
                    <Text style={styles.loginScreenCountryCodeText}>English (United States)</Text>
                    <Image source={require('../assets/images/down-arrow.png')} style={styles.loginScreenDownArrowIcon} />
                </View>
            </TouchableOpacity>
            <View style={styles.loginScreenBodyContainer}>
            <Image source={require('../assets/images/header-logo.png')} style={styles.loginScreenInstagramLogo} />
                <TextInput autoCapitalize='none' autoCorrect={false} value={email} style={styles.loginScreenEmailInputField} onChangeText={(email) => handleEmailField(email)} placeholderTextColor={'#ccc'} placeholder="Enter Your Email" />
                <View style={styles.loginScreenPasswordInputContainer}>
                    <TextInput autoCapitalize='none' maxLength={10} autoCorrect={false} value={password} onChangeText={(password) => handlePasswordField(password)} secureTextEntry={securePassword} style={styles.loginScreenPasswordInputField} placeholderTextColor={'#ccc'} placeholder="Enter Your Password" />
                    <TouchableOpacity style={styles.loginScreenPasswordIconContainer} onPress={showPassword} >
                        <Image source={passwordHideIcon} style={styles.loginScreenPasswordIcon} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={loginBtn ? styles.loginBtnDisabled : styles.loginScreenBtnContainer} onPress={submitUserDetails} disabled={loginBtn}>
                    <Text style={styles.loginScreenBtnText}>Log in</Text>
                </TouchableOpacity>
                <View style={styles.loginScreenBottomContainer}>
                    <Text style={styles.loginScreenBottomText}>Forgot your login details? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate()}>
                        <Text style={styles.loginScreenSignupLinkText}>Get Help logging in</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.loginScreenOrText}>OR</Text>
                <TouchableOpacity style={styles.loginScreenFBLoginContainer}>
                    <Image source={require('../assets/images/fb-logo.png')} style={styles.loginScreenFBLogo} />
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