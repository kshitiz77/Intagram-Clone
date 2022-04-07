import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native'
import React, { useContext, useState } from 'react'
import FormikPostUploader from './FormikPostUploader'
import { styles } from '../../styles/styles'
import { NewPostContext } from '../../screens/NewPostScreen'

const AddNewPost = ({navigation}) => {
    
  return (
      <ScrollView style={styles.addNewPostScreenContainer}>
        <Header navigation={navigation}/>
        <FormikPostUploader />
      </ScrollView>
  )
}

const Header = ({navigation}) =>{
    const newPostContext = useContext(NewPostContext)
    // console.log(newPostContext)
    return(
        <View style={styles.addNewPostScreenHeaderContainer}>
            <View style={styles.addNewPostScreenLeftSideHeader}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Image source={require('../../assets/images/back.png')} style={styles.addNewPostScreenBackBtn}></Image>
            </TouchableOpacity>
            <Text style={styles.addNewPostScreenHeaderText}> New Post</Text>
            </View>
            <TouchableOpacity>
           <Image source={require('../../assets/images/check.png')} style={styles.addNewPostScreenCheckIcon}/>
            </TouchableOpacity>
        </View>
    )
}
export default AddNewPost