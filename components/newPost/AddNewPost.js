import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import FormikPostUploader from './FormikPostUploader'
import { styles } from '../../styles'



const AddNewPost = () => {
  return (
    <View style={styles.container}>
        <Header />
        <FormikPostUploader />
    </View>
  )
}

const Header = () =>{
    return(
        <View style={styles.addNewPostScreenHeaderContainer}>
            <View style={styles.addNewPostScreenLeftSideHeader}>
            <TouchableOpacity>
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