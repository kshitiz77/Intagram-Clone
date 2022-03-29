import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { USERS } from '../../data/users'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import { styles } from '../../styles/styles'

const Stories = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity >
          <View style={styles.homeScreenStoriesContainer}>
            <Image source={require('../../assets/images/Iron-Man.jpg')} style={styles.homeScreenAddStory} />
            <View style={styles.homeScreenAddStoryBtn}>
              <Text style={styles.homeScreenAddStoryText}>+</Text>
            </View>
            <Text style={styles.homeScreenStoryUserName}>Your Story</Text>
          </View>
        </TouchableOpacity>
        {USERS.map((story, index) => (
          <TouchableOpacity key={index}>
            <View style={styles.homeScreenStoriesContainer}>
              <Image source={story.img} style={styles.homeScreenStory} />
              <Text style={styles.homeScreenStoryUserName}>{story.user.length > 11 ? story.user.slice(0, 10).toLowerCase() + '...'
                : story.user.toLowerCase()}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
         <Divider width={1} orientation='vertical' />
    </View>
  )
}

export default Stories