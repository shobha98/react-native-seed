import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import HooksExample from './HooksExample';
import ReduxExample from './ReduxExample';
import ContextHook from './HooksExample/ContextHook';
import ReducerHook from './HooksExample/ReducerHook';
import UseRefHook from './HooksExample/UseRefHook';
import MemoHook from './HooksExample/MemoHook';
import ImperativeHandle from './HooksExample/ImperativeHandle';
import ReduxSagaExample from './ReduxSagaExample';

import {string} from '../Config/string';
import NetworkInfo from '../Components/networkInfo';

export {
  HooksExample,
  ReduxExample,
  ReducerHook,
  ContextHook,
  UseRefHook,
  MemoHook,
  ImperativeHandle,
  ReduxSagaExample,
};

const MainScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ReduxExample')}>
        <Text style={styles.text}>{string.redux_example}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('HooksExample')}>
        <Text style={styles.text}>{string.hooks_example}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ReduxSagaExample')}>
        <Text style={styles.text}>{string.redux_saga_example}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    marginVertical: 15,
    width: 300,
    alignItems: 'center',
    borderRadius: 15,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
