/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import HomeScreen from './screens/HomeScreen';
import NewPostScreen from './screens/NewPostScreen';
import ProfileScreen from './screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native';
import BottomNavigation from './components/Navigation/BottomNavigation';
import StackNavigation from './components/Navigation/StackNavigation';
import AddNewPost from './components/newPost/AddNewPost';

const App = () => {

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
      />
      <NavigationContainer>
        <BottomNavigation />
      </NavigationContainer>
      {/* <AddNewPost /> */}

    </>
  );
};

export default App;
