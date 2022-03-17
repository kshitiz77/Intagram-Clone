import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import AddNewPost from '../components/newPost/AddNewPost'
import { styles } from '../styles'

const NewPostScreen = () => {
  return (
    <SafeAreaView style={styles.addNewPostScreencontainer}>
      <AddNewPost />
    </SafeAreaView>
  )
}

export default NewPostScreen