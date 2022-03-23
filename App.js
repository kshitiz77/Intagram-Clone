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
import Navigation from './components/Navigation/Navigation';
import StackNavigation from './components/Navigation/StackNavigation';

const App = () => {

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
      />
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </>
  );
};

export default App;
