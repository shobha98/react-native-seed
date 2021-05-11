import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import CounterExample from '../screens/counterExample';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'CounterExample'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="CounterExample" component={CounterExample} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
