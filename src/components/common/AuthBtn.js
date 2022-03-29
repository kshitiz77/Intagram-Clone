import { Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from '../../styles/styles'

const AuthBtn = ({
    loginBtn, 
    submitUserDetails,
    title,
}) => {
    return (
        <TouchableOpacity style={loginBtn ? styles.loginBtnDisabled : styles.loginScreenBtnContainer} onPress={submitUserDetails} disabled={loginBtn}>
            <Text style={styles.loginScreenBtnText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default AuthBtn

export const FBLogin = ({
    image,
    title
}) => {
    return(
        <TouchableOpacity style={styles.loginScreenFBLoginContainer}>
            <Image source={require('../../assets/images/fb-logo.png')} style={styles.loginScreenFBLogo} />
            <Text style={styles.loginScreenFBLoginText}>{title}</Text>
        </TouchableOpacity>
    )
}