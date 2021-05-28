import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HooksExample, ReduxSagaExample} from '../Screens';

import TabBar from './tabBar';
import UserNavigator from './userNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={'HomeScreen'}
      tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen name="HomeScreen" component={UserNavigator} />
      <Tab.Screen name="HooksExample" component={HooksExample} />
      <Tab.Screen name="ReduxSagaExample" component={ReduxSagaExample} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
