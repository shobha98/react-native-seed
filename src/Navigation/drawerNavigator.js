import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import {
  HomeScreen,
  HooksExample,
  ReduxExample,
  ReduxSagaExample,
} from '../Screens';

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="ReduxExample" component={ReduxExample} />
      <Drawer.Screen name="HooksExample" component={HooksExample} />
      <Drawer.Screen name="ReduxSagaExample" component={ReduxSagaExample} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
