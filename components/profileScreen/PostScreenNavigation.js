import { View, Text, Image } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import YourPosts from './YourPosts'
import TagPosts from './TagPosts'
import { styles } from '../../styles';

const Tab = createMaterialTopTabNavigator();
const activeYourPostIcon = require('../../assets/activeGrid.png');
const inactiveYourPostIcon = require('../../assets/inactiveGrid.png');
const activeTagUser = require('../../assets/activeTagIcon.png');
const inactiveTagUser = require('../../assets/inactiveTagIcon.png');

const PostScreenNavigation = () => {
  return (
      <Tab.Navigator initialRouteName="YourPosts" screenOptions={({ route }) => ({ 
        tabBarShowLabel:false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'YourPosts') {
            iconName = focused
              ? activeYourPostIcon
              : inactiveYourPostIcon;
          } else if (route.name === 'TagPosts') {
            iconName = focused ? activeTagUser : inactiveTagUser;
          }

          // You can return any component that you like here!
          return <Image source={iconName} style={styles.profileTabIcon}  />;
        },
        tabBarStyle: { backgroundColor: 'transparent'},
        tabBarIndicatorStyle:{
          borderBottomWidth:2,
          borderBottomColor:'#fff',
        }
      })}>
      <Tab.Screen  name="YourPosts" component={YourPosts} />
      <Tab.Screen name="TagPosts" component={TagPosts} />
    </Tab.Navigator>
  )
}

export default PostScreenNavigation