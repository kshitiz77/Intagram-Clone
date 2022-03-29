import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { YourPostObj } from '../../data/yourPostObj'
import { styles } from '../../styles/styles'
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

  
export default YourPosts