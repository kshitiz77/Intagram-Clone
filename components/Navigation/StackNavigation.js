import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import AddNewPost from '../newPost/AddNewPost';
import ProfileScreen from '../../screens/ProfileScreen';

const Stack = createStackNavigator();


const StackNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen component={AddNewPost} name='Post' />
        <Stack.Screen component={ProfileScreen} name='profile' />
    </Stack.Navigator>
  )
}

export default StackNavigation