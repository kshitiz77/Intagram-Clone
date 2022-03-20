/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect} from 'react';
import HomeScreen from './screens/HomeScreen';
import NewPostScreen from './screens/NewPostScreen';
import ProfileScreen from './screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native'

const App = () => {

  return (
    <>
      {/* <HomeScreen />  */}
      {/* <NewPostScreen /> */}
      <NavigationContainer>
      <ProfileScreen />
      </NavigationContainer>
    </>
  );
};

export default App;
