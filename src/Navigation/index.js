import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import {
  LoginScreen,
  SignupScreen,
  ReducerHook,
  ContextHook,
  UseRefHook,
  MemoHook,
  ImperativeHandle,
} from '../Screens';

import TabNavigator from './tabNavigator';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const isLoggedIn = useSelector((state) => state.userReducer.isUserLoggedIn);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isLoggedIn ? 'HomeScreen' : 'LoginScreen'}
        screenOptions={{
          headerShown: false,
        }}>
        {!isLoggedIn ? (
          <>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="SignupScreen" component={SignupScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="HomeScreen" component={TabNavigator} />
            <Stack.Screen name="ReducerHook" component={ReducerHook} />
            <Stack.Screen name="ContextHook" component={ContextHook} />
            <Stack.Screen name="UseRefHook" component={UseRefHook} />
            <Stack.Screen name="MemoHook" component={MemoHook} />
            <Stack.Screen
              name="ImperativeHandle"
              component={ImperativeHandle}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
