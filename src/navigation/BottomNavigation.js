import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen'
import ReelScreen from '../screens/ReelScreen'
import ActivityScreen from '../screens/ActivityScreen'
import ProfileScreen from '../screens/ProfileScreen';
import { styles } from '../styles/styles'

const BottomTab = createBottomTabNavigator();

const activeHomeIcon = require('../assets/images/Active-Home-Icon.png')
const inactiveHomeIcon = require('../assets/images/Inactive-Home-Icon.png')
const activeSearchIcon = require('../assets/images/Active-Search-Icon.png')
const inactiveSearchIcon = require('../assets/images/Inactive-Search-Icon.png')
const activeReelIcon = require('../assets/images/Active-Reel-Icon.png')
const inactiveReelIcon = require('../assets/images/Inactive-Reel-Icon.png')
const activeLikeIcon = require('../assets/images/Active-Like-Icon.png')
const inactiveLikeIcon = require('../assets/images/Love-Icon.png')
const activeProfileIcon = require('../assets/images/Iron-Man.jpg')


const BottomNavigation = () => {
  return (
    <BottomTab.Navigator initialRouteName="Home" screenOptions={({ route }) => ({
      tabBarShowLabel: false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? activeHomeIcon
            : inactiveHomeIcon;
        } else if (route.name === 'Search') {
          iconName = focused ? activeSearchIcon : inactiveSearchIcon;
        } else if (route.name === 'Reel') {
          iconName = focused ? activeReelIcon : inactiveReelIcon;
        } else if (route.name === 'Like') {
          iconName = focused ? activeLikeIcon : inactiveLikeIcon;
        } else if (route.name === 'Profile') {
          iconName = activeProfileIcon;
        }

        // You can return any component that you like here!
        return <Image source={iconName} style={styles.profileTabIcon} />;
      },
      tabBarStyle: { backgroundColor: '#000' },
      tabBarIndicatorStyle: {
        borderBottomWidth: 0,
        borderBottomColor: '#fff',
      }
    })}>
      <BottomTab.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
      <BottomTab.Screen options={{ headerShown: false }} name="Search" component={SearchScreen} />
      <BottomTab.Screen options={{ headerShown: false }} name="Reel" component={ReelScreen} />
      <BottomTab.Screen options={{ headerShown: false }} name="Like" component={ActivityScreen} />
      <BottomTab.Screen options={{ headerShown: false }} name="Profile" component={ProfileScreen} />

    </BottomTab.Navigator>
  )
}

export default BottomNavigation