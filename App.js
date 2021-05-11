import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
// import PushNotification from 'react-native-push-notification';
import firebase from '@react-native-firebase/app';
import SplashScreen from 'react-native-splash-screen';

import AppNavigator from './src/Navigation';
import {store} from './src/Redux';
import RemotePushController from './src/components/RemotePushController';

firebase.initializeApp();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();

    // PushNotification.configure({
    //   onRegister: function (token) {
    //     console.log('TOKEN:', token);
    //   },

    //   onNotification: function (notification) {
    //     console.log('NOTIFICATION:', notification);
    //     if (notification.foreground) {
    //       PushNotification.localNotification({
    //         title: notification.title,
    //         message: notification.message,
    //       });
    //     }
    //   },

    //   permissions: {
    //     alert: true,
    //     badge: true,
    //     sound: true,
    //   },
    //   popInitialNotification: true,
    //   requestPermissions: true,
    // });
  }, []);

  return (
    <Provider store={store}>
      <RemotePushController />
      <AppNavigator />
    </Provider>
  );
};

export default App;
