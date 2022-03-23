import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { styles } from '../../styles'

const TagPosts = () => {
  return (
    <View style={styles.tagPostsContainer}>
      <View style={styles.tagPostIconContainer}>
        <Image source={require('../../assets/activeTagIcon.png')} style={styles.tagPostIcon} />
      </View>
      <View style={styles.tagPostTitleContainer}>
        <Text style={styles.tagPostTitle}>Photos and</Text>
        <Text style={styles.tagPostTitle}>videos of you</Text>
      </View>
      <Text style={styles.tagPostDescription}>When people tag you in photos and videos, they'll appear here.</Text>
    </View>
  )
}

export default TagPosts