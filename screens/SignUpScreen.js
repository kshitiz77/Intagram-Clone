import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../styles'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

const SignUpScreen = ({ navigation }) => {
    const [passwordHideIcon, setPasswordHideIcon] = useState(require('../assets/passwordHide.png'));
    const [securePassword, setSecurePassword] = useState(true)
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [signupBtn, setSignupBtn] = useState(true)
    const [loading, setLoading] = useState(false)


    if(loading){
        return(
            <SafeAreaView style={styles.activityIndicator}>
                <ActivityIndicator size="large" color="#fff" />
            </SafeAreaView>
        ) 
    }

    const handleUserNameField = (userName) =>{
        setUserName(() => userName)
        if( password !== '' && email !== '' && userName !== ''){
            setSignupBtn(false)
        }else{
            setSignupBtn(true)
        }
    }

    const handleEmailField = (email) =>{
        setEmail(() => email)
        if( password !== '' && email !== '' && userName !== ''){
            setSignupBtn(false)
        }else{
            setSignupBtn(true)
        }
    }

    const handlePasswordField = (password) =>{
        setPassword(() => password)
        if( password !== '' && email !== '' && userName !== ''){
            setSignupBtn(false)
        }else{
            setSignupBtn(true)
        }
    }

    // Sign up form validation =>
    const submitUserDetails = async (event) =>{
        setLoading(true)
        if(userName === ""){
            console.log('Please Enter Your User Name');
        }else if(email === ""){
            console.log('Please Enter Your Email Address');
        }else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
            console.log('Please Enter Your Correct Email Address');
        }else if(password === ""){
            console.log('Please Enter Your Password');
        }else if(password.length < 6){
            console.log('Password should be minimum six characters');
        }else{
            try{
                const result = await auth().createUserWithEmailAndPassword(email, password)
                firestore().collection('users').doc(result.user.uid).set({
                    userName : userName,
                    email : result.user.email,
                    uid : result.user.uid
                })
                setLoading(false)
                navigation.navigate('LoginScreen')
            }catch(error){
                alert('Something went worng');
            }
        }   
    }

    // show password =>
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
                <TextInput autoCorrect={false} autoCapitalize='none' name='userName' value={userName} onChangeText={(userName) => handleUserNameField(userName)} style={styles.loginScreenEmailInputField} placeholderTextColor={'#ccc'} placeholder="Enter Your Username" />
                <TextInput autoCorrect={false} autoCapitalize='none' name='email' value={email} onChangeText={(email) => handleEmailField(email)} keyboardType="email-address" style={styles.loginScreenEmailInputField} placeholderTextColor={'#ccc'} placeholder="Enter Your Email" />
                <View style={styles.loginScreenPasswordInputContainer}>
                    <TextInput autoCorrect={false} autoCapitalize='none' name='password' maxLength={10} value={password} onChangeText={(password) => handlePasswordField(password)} secureTextEntry={securePassword} style={styles.loginScreenPasswordInputField} placeholderTextColor={'#ccc'} placeholder="Enter Your Password" />
                    <TouchableOpacity style={styles.loginScreenPasswordIconContainer} onPress={showPassword}>
                        <Image source={passwordHideIcon} style={styles.loginScreenPasswordIcon} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={signupBtn ? styles.loginBtnDisabled : styles.loginScreenBtnContainer} onPress={submitUserDetails} disabled={signupBtn}>
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