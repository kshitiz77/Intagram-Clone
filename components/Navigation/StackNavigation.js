import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../../screens/ProfileScreen';
import SearchScreen from '../../screens/SearchScreen'
import AddNewPost from '../newPost/AddNewPost'
import HomeScreen from '../../screens/HomeScreen';
import FormikPostUploader from '../newPost/FormikPostUploader';
const Stack = createStackNavigator();


const StackNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Post' component={AddNewPost}/>
        <Stack.Screen name='Search' component={SearchScreen}/>
        <Stack.Screen  name='Profile' component={ProfileScreen}/>
        <Stack.Screen name='Home' component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default StackNavigation