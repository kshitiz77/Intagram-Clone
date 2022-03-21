import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/profileScreen/Header'
import { styles } from '../styles'
import UserDetails from '../components/profileScreen/UserDetails'
import DiscoverPeople from '../components/profileScreen/DiscoverPeople'
import PostScreenNavigation from '../components/profileScreen/PostScreenNavigation'
import YourPosts from '../components/profileScreen/YourPosts'
import TagPosts from '../components/profileScreen/TagPosts'

const ProfileScreen = () => {
  const [showDiscoverPeople, setShowDiscoverPeople] = useState(false)

  const handleShowDiscoverPeople = () =>{
    if(showDiscoverPeople === false){
      setShowDiscoverPeople(true)
    }else{
      setShowDiscoverPeople(false)
    }
  }

  return (
    <SafeAreaView style={styles.profileScreenContainer}>
      <Header />
      <ScrollView>
        <UserDetails handleShowDiscoverPeople={handleShowDiscoverPeople}/>
        {showDiscoverPeople ? 
        <DiscoverPeople />
        : null}
      <PostScreenNavigation />
      </ScrollView>
      
    </SafeAreaView>
  )
}

export default ProfileScreen