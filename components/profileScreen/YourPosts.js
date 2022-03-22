import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { YourPostObj } from '../../data/yourPostObj'
// import { styles } from '../../styles'
const YourPosts = () => {
  return (
      <View style={styles.yourPostsContainer}>
        {YourPostObj.map((posts, index)=>(
          <TouchableOpacity key={index} style={styles.yourPostsImgContainer}>
            <Image source={posts.postImg.img_1} style={{width:118, height:118}}/>
          </TouchableOpacity>
        ))}
      </View>
  )
}

const styles = StyleSheet.create({
  yourPostsContainer:{
    flex:1,
    backgroundColor:'#000',
    flexDirection:'row',
    justifyContent:'space-between',
    flexWrap:'wrap'
  },
  yourPostsImgContainer:{
    flexDirection:'row',
    marginVertical:2
  }
})

  
export default YourPosts