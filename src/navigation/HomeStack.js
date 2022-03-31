import { View, Text } from 'react-native'
import React from 'react'
import AddNewReel from '../components/newReelPost/AddNewReel';
import AddNewStory from '../components/addStoryPost/AddNewStory';
import AddNewStoryHighlight from '../components/addStoryHighlight/AddNewStoryHighlight';
import GoLive from '../components/goLive/GoLive';
import Guide from '../components/guide/Guide';
import AddNewPost from '../components/newPost/AddNewPost'
import BottomNavigation from './BottomNavigation';
import { createStackNavigator } from '@react-navigation/stack';
import Settings from '../components/settings/Settings';
import navigationStrings from './navigationStrings';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName={navigationStrings.HOME}>
      <Stack.Screen
        name={navigationStrings.HOME}
        component={BottomNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name='Post'
        component={AddNewPost}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name='Reel'
        component={AddNewReel}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name='Story'
        component={AddNewStory}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name='Story Highlight'
        component={AddNewStoryHighlight}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name='Live'
        component={GoLive}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name='Guide'
        component={Guide}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name='Settings'
        component={Settings}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name='ResetPassword'
        component={ResetPasswordScreen}
      />

    </Stack.Navigator>
  )
}

export default HomeStack