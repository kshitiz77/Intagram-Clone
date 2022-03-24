/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import NewPostScreen from './screens/NewPostScreen';
import ProfileScreen from './screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaView, StatusBar } from 'react-native';
import BottomNavigation from './components/Navigation/BottomNavigation';
import StackNavigation from './components/Navigation/StackNavigation';
import AddNewPost from './components/newPost/AddNewPost';
import HomeScreen from './screens/HomeScreen';

import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const App = () => {

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
      />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name="Home" component={BottomNavigation}/>
          <Stack.Screen options={{ headerShown: false }} name='Post' component={AddNewPost}/>
        </Stack.Navigator>
      </NavigationContainer>

    </>
  );
};

export default App;
