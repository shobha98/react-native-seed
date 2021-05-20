import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MainScreen, {
  HooksExample,
  ReduxExample,
  ReducerHook,
  ContextHook,
  UseRefHook,
  MemoHook,
  ImperativeHandle,
  ReduxSagaExample,
} from '../Screens';

import LoginScreen from '../Screens/LoginScreen';
import SignupScreen from '../Screens/SignupScreen';

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
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="ReduxExample" component={ReduxExample} />
        <Stack.Screen name="HooksExample" component={HooksExample} />
        <Stack.Screen name="ReducerHook" component={ReducerHook} />
        <Stack.Screen name="ContextHook" component={ContextHook} />
        <Stack.Screen name="UseRefHook" component={UseRefHook} />
        <Stack.Screen name="MemoHook" component={MemoHook} />
        <Stack.Screen name="ImperativeHandle" component={ImperativeHandle} />
        <Stack.Screen name="ReduxSagaExample" component={ReduxSagaExample} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
