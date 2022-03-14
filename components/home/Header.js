import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image style={styles.logo} source={require('../../assets/header-logo.png')} />
            </TouchableOpacity>
            <View style={styles.iconsContainer}>
            <TouchableOpacity>
                <Image source={require('../../assets/add-icon.png')} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.unreadBadge}>
                    <Text style={styles.unreadBadgeText}>11</Text>
                </View>
                <Image source={require('../../assets/messenger.png')} style={styles.icon} />
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 15,
    },
    logo: {
        width: 120,
        height: 60,
        resizeMode: 'contain'
    },
    iconsContainer: {
        flexDirection: 'row',
    },
    icon: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
        marginLeft: 20
    },
    unreadBadge:{
        backgroundColor:"#ff5e5e",
        position:'absolute',
        left:30,
        bottom:16,
        width:25,
        height:18,
        borderRadius:15,
        alignItems:'center',
        zIndex: 1001,
    },
    unreadBadgeText:{
        color:'#fff',
        fontWeight:'600',
    }
})

export default Header