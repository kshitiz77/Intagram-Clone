import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/profileScreen/Header'
import { styles } from '../styles'

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.profileScreenContainer}>
        <Header />
    </SafeAreaView>
  )
}

export default ProfileScreen