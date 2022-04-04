import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './src/navigation/Routes';
import store from './src/redux/store';
import { Provider } from 'react-redux';

const App = () => {

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
      />
      <SafeAreaProvider>
        <Provider store={store}>
          <Routes />
        </Provider>
      </SafeAreaProvider>

    </>
  );
};

export default App;
