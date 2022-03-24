import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
// import ProfileScreen from '../../screens/ProfileScreen';
import SearchScreen from '../../screens/SearchScreen'
import AddNewPost from '../newPost/AddNewPost'
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();


const StackNavigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name='Post' component={AddNewPost}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation