import React from 'react';
import HomeStack from './HomeStack'
import navigationStrings from './navigationStrings';

export default function (Stack) {
  // const {appData, appStyle} = useSelector(state => state?.initBoot);

  return (
    <>
      <Stack.Screen
        name={navigationStrings.HOME}
        component={HomeStack}
        options={{headerShown: false}}
      />
    </>
  );
}