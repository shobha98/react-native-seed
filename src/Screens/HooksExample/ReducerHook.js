import React, {useReducer} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + action.value};
    case 'decrement':
      return {count: state.count - action.value};
    default:
      throw new Error();
  }
}

const ReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>useReducer hook</Text>
      <Text style={styles.text}>Count: {state.count}</Text>
      <View style={styles.button}>
        <Button
          title="Increment"
          onPress={() => dispatch({type: 'increment', value: 5})}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Decrement"
          onPress={() => dispatch({type: 'decrement', value: 10})}
        />
      </View>
    </View>
  );
};

export default ReducerHook;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  button: {
    width: 100,
    marginVertical: 20,
  },
  text: {
    marginTop: 50,
    fontSize: 30,
  },
});
