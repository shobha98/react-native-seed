import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
// import crashlytics from '@react-native-firebase/crashlytics';

import {increaseCount, decreaseCount} from '../Redux/actions';

const CounterExample = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  // useEffect(() => {
  //   console.log('Before crash method');
  //   crashlytics().crash();
  //   console.log('After crash method');
  //   crashlytics().log('Page Just Mounted');
  //   return () => {
  //     crashlytics().log('Page Just Unmounted');
  //   };
  // }, []);

  const IncreaseCount = () => {
    dispatch(increaseCount());
  };

  const DecreaseCount = () => {
    dispatch(decreaseCount());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>{count}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => IncreaseCount()}>
          <Text style={styles.buttonText}>INCREASE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => DecreaseCount()}>
          <Text style={styles.buttonText}>DECREASE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CounterExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
  },
  buttonText: {
    color: 'white',
  },
  countText: {
    alignSelf: 'center',
    fontSize: 30,
    marginBottom: 50,
  },
});
