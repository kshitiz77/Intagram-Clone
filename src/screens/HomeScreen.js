import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Posts from '../components/home/Posts'
import { POSTS } from '../data/posts'
import { styles } from '../styles/styles'

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.homeScreenContainer}>
      <Header navigation={navigation}/>
      <ScrollView >
        <Stories />
        {POSTS.map((posts, index) => (
          <Posts posts={posts} key={index}/>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen