import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import firebase from '@react-native-firebase/app';
import SplashScreen from 'react-native-splash-screen';

import AppNavigator from './src/Navigation';
import {store} from './src/Redux';
import RemotePushController from './src/Components/RemotePushController';
import NetworkInfo from './src/Components/networkInfo';

firebase.initializeApp();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <RemotePushController />
      <AppNavigator />
      <NetworkInfo />
    </Provider>
  );
};

export default App;
