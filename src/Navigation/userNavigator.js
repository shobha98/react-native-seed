import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  ReducerHook,
  ContextHook,
  UseRefHook,
  MemoHook,
  ImperativeHandle,
  HomeScreen,
} from '../Screens';

const Stack = createStackNavigator();

const UserNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'HomeScreen'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ReducerHook" component={ReducerHook} />
      <Stack.Screen name="ContextHook" component={ContextHook} />
      <Stack.Screen name="UseRefHook" component={UseRefHook} />
      <Stack.Screen name="MemoHook" component={MemoHook} />
      <Stack.Screen name="ImperativeHandle" component={ImperativeHandle} />
    </Stack.Navigator>
  );
};

export default UserNavigator;
