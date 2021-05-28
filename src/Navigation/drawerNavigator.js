import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import {HooksExample, ReduxExample, ReduxSagaExample} from '../Screens';

import TabNavigator from './tabNavigator';

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeScreen" component={TabNavigator} />
      <Drawer.Screen name="ReduxExample" component={ReduxExample} />
      <Drawer.Screen name="HooksExample" component={HooksExample} />
      <Drawer.Screen name="ReduxSagaExample" component={ReduxSagaExample} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
