import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {ReducerHook, ContextHook} from '../Screens';

import DrawerNavigator from './drawerNavigator';
import TabBar from './tabBar';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={'LoginScreen'}
      tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen name="HomeScreen" component={DrawerNavigator} />
      <Tab.Screen name="ReducerHook" component={ReducerHook} />
      <Tab.Screen name="ContextHook" component={ContextHook} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
