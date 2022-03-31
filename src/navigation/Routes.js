import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';

import AuthStack from './AuthStack';

import MainStack from './MainStack';

const Stack = createStackNavigator();

export default function Routes() {

  const [screen , setScreen] = useState(true);


  return (
    <NavigationContainer>
      <Stack.Navigator>
        {screen ? MainStack(Stack) : AuthStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}