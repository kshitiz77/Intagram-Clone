import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FormikPostUploader from './FormikPostUploader'
import { styles } from '../../styles'

const AddNewPost = ({navigation}) => {
  return (
      <ScrollView style={styles.addNewPostScreenContainer}>
        <Header navigation={navigation}/>
        <FormikPostUploader />
      </ScrollView>
  )
}

const Header = ({navigation}) =>{
    return(
        <View style={styles.addNewPostScreenHeaderContainer}>
            <View style={styles.addNewPostScreenLeftSideHeader}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Image source={require('../../assets/back.png')} style={styles.addNewPostScreenBackBtn}></Image>
            </TouchableOpacity>
            <Text style={styles.addNewPostScreenHeaderText}> New Post</Text>
            </View>
            <TouchableOpacity>
           <Image source={require('../../assets/check.png')} style={styles.addNewPostScreenCheckIcon}/>
            </TouchableOpacity>
        </View>
    )
}
export default AddNewPost