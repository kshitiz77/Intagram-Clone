import { View, Text } from 'react-native'
import React from 'react'
import AddNewReel from '../newReelPost/AddNewReel';
import AddNewStory from '../addStoryPost/AddNewStory';
import AddNewStoryHighlight from '../addStoryHighlight/AddNewStoryHighlight';
import LoginScreen from '../../screens/LoginScreen';
import GoLive from '../goLive/GoLive';
import Guide from '../guide/Guide';
import AddNewPost from '../newPost/AddNewPost'
import BottomNavigation from './BottomNavigation';
import SignUpScreen from '../../screens/SignUpScreen';
import { createStackNavigator } from '@react-navigation/stack';
import Settings from '../settings/Settings';
import ResetPasswordScreen from '../../screens/ResetPasswordScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='LoginScreen'>
      <Stack.Screen options={{ headerShown: false }} name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen options={{ headerShown: false }} name="LoginScreen" component={LoginScreen} />
      <Stack.Screen options={{ headerShown: false }} name="HomeScreen" component={BottomNavigation} />
      <Stack.Screen options={{ headerShown: false }} name='Post' component={AddNewPost} />
      <Stack.Screen options={{ headerShown: false }} name='Reel' component={AddNewReel} />
      <Stack.Screen options={{ headerShown: false }} name='Story' component={AddNewStory} />
      <Stack.Screen options={{ headerShown: false }} name='Story Highlight' component={AddNewStoryHighlight} />
      <Stack.Screen options={{ headerShown: false }} name='Live' component={GoLive} />
      <Stack.Screen options={{ headerShown: false }} name='Guide' component={Guide} />
      <Stack.Screen options={{ headerShown: false }} name='Settings' component={Settings} />
      <Stack.Screen options={{ headerShown: false }} name='ResetPassword' component={ResetPasswordScreen} />
    </Stack.Navigator>
  )
}

export default StackNavigation