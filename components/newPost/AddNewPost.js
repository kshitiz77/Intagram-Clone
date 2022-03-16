import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import FormikPostUploader from './FormikPostUploader'


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
        <View style={styles.headerContainer}>
            <TouchableOpacity>
                <Image source={require('../../assets/back.png')} style={styles.backBtn}></Image>
            </TouchableOpacity>
            <Text style={styles.headerText}> New post</Text>
            <Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        margin:10
    },
    backBtn:{
        width:30,
        height:30
    },
    headerText:{
        color:'#fff',
        fontWeight:'600',
        fontSize:18
    }
})
export default AddNewPost