import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { USERS } from '../../data/users'

const Stories = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity >
          <View style={styles.container}>
            <Image source={require('../../assets/Iron-Man.jpg')} style={styles.addStory} />
            <View style={styles.addStoryBtn}>
              <Text style={styles.addStoryText}>+</Text>
            </View>
            <Text style={styles.userName}>Your Story</Text>
          </View>
        </TouchableOpacity>
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
  container: {
    marginHorizontal: 5,
    alignItems: 'center'
  },
  addStory: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  addStoryBtn: {
    backgroundColor: "#3dadfc",
    borderWidth: 2,
    borderColor: '#001f59',
    position: 'absolute',
    left: 45,
    bottom: 18,
    width: 22,
    height: 22,
    borderRadius: 50,
    alignItems: 'center',
    zIndex: 1001,
  },

  
  addStoryText: {
    color: '#fff',
    fontWeight: '600',
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