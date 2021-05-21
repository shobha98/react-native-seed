import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  LoginScreen,
  SignupScreen,
  ReducerHook,
  ContextHook,
  UseRefHook,
  MemoHook,
  ImperativeHandle,
} from '../Screens';

import DrawerNavigator from './drawerNavigator';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'LoginScreen'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={DrawerNavigator} />
        <Stack.Screen name="ReducerHook" component={ReducerHook} />
        <Stack.Screen name="ContextHook" component={ContextHook} />
        <Stack.Screen name="UseRefHook" component={UseRefHook} />
        <Stack.Screen name="MemoHook" component={MemoHook} />
        <Stack.Screen name="ImperativeHandle" component={ImperativeHandle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
