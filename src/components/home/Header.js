import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { styles } from '../../styles/styles'

const Header = ({navigation}) => {
    return (
        <View style={styles.homeScreenHeaderContainer}>
                <Image style={styles.appLogo} source={require('../../assets/images/header-logo.png')} />
            <View style={styles.homeScreenHeaderIconsContainer}>
            <TouchableOpacity>
                <Image source={require('../../assets/images/add-icon.png')} style={styles.homeScreenHeaderIcon} />
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.homeScreenHeaderUnreadBadge}>
                    <Text style={styles.homeScreenHeaderUnreadBadgeText}>11</Text>
                </View>
                <Image source={require('../../assets/images/messenger.png')} style={styles.homeScreenHeaderIcon} />
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header