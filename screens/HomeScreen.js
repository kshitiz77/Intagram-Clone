import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Posts from '../components/home/Posts'
import { POSTS } from '../data/posts'
import BottomTab, { BottomTabIcons } from '../components/home/BottomTab'


const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView >
        <Stories />
        {POSTS.map((posts, index) => (
          <Posts posts={posts} key={index}/>
        ))}
      </ScrollView>
      <BottomTab icons={BottomTabIcons}/>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  }
})


export default HomeScreen