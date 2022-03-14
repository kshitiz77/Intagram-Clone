import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { USERS } from '../../data/users'

const Stories = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <TouchableOpacity key={index}>
          <View style={styles.container}>
            <Image source={story.img} style={styles.story} />
            <Text style={styles.userName}>{story.user.length > 11 ? story.user.slice(0, 10).toLowerCase() + '...' 
            : story.user.toLowerCase()}</Text>
          </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginHorizontal: 5,
    alignItems:'center'
  },
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#f5a142'
  },
  userName: {
    color: '#fff'
  }
})

export default Stories