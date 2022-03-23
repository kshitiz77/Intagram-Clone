import { View, Text, StyleSheet, SafeAreaView, ScrollView, ScrollViewBase, StatusBar } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/profileScreen/Header'
import { styles } from '../styles'
import UserDetails from '../components/profileScreen/UserDetails'
import DiscoverPeople from '../components/profileScreen/DiscoverPeople'
import PostScreenNavigation from '../components/profileScreen/PostScreenNavigation'

const ProfileScreen = ({navigation}) => {
  const [showDiscoverPeople, setShowDiscoverPeople] = useState(false)

  const handleShowDiscoverPeople = () =>{
    if(showDiscoverPeople === false){
      setShowDiscoverPeople(true)
    }else{
      setShowDiscoverPeople(false)
    }
  }
  return (
    <>
    
    <SafeAreaView style={styles.profileScreenContainer}>
      <Header navigation={navigation}/>
        <UserDetails handleShowDiscoverPeople={handleShowDiscoverPeople}/>
        {showDiscoverPeople ? 
        <DiscoverPeople />
        : null}
      <PostScreenNavigation/>
    </SafeAreaView>
        </>
  )
}

export default ProfileScreen