import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native';
import StackNavigation from './src/navigation/StackNavigation';

const App = () => {

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
      />
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>

    </>
  );
};

export default App;
