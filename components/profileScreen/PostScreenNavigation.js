import { View, Text, Image } from 'react-native'
import React from 'react'
import YourPosts from './YourPosts';
import TagPosts from './TagPosts';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

const activeYourPostIcon = require('../../assets/activeGrid.png');
const inactiveYourPostIcon = require('../../assets/inactiveGrid.png');

const PostScreenNavigation = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Your Posts') {
          iconName = focused
            ? activeYourPostIcon
            : inactiveYourPostIcon;
        } else if (route.name === 'Tag Posts') {
          iconName = focused ? 'ios-list-box' : 'ios-list';
        }

        // You can return any component that you like here!
        return <Image source={iconName} style={{width:20, height:20}}  />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}>
    <Tab.Screen name="Your Posts" component={YourPosts} />
    <Tab.Screen name="Tag Posts" component={TagPosts} />
  </Tab.Navigator>
  )
}

export default PostScreenNavigation