import React, {useRef} from 'react';

import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen'

import navigationStrings from './navigationStrings';

export default function (Stack, screen) {
    return (
        <>
            <Stack.Screen
                options={{ headerShown: false }}
                name={navigationStrings.LOGIN}
                component={LoginScreen}
            />

            <Stack.Screen
                options={{ headerShown: false }}
                name="SignUpScreen"
                component={SignUpScreen}
            />

        </>
    );
}