import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
// import crashlytics from '@react-native-firebase/crashlytics';

import CustomHeader from '../../Components/customHeader';

import {string} from '../../Config/string';

import {
  increaseCount,
  decreaseCount,
  resetCount,
} from '../../Redux/Actions/counterAction';
import {colors} from '../../Styles/colors';

const CounterExample = ({navigation}) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counterReducer.count);

  // useEffect(() => {
  //   console.log('Before crash method');
  //   crashlytics().crash();
  //   console.log('After crash method');
  //   crashlytics().log('Page Just Mounted');
  //   return () => {
  //     crashlytics().log('Page Just Unmounted');
  //   };
  // }, []);

  useEffect(() => {
    return () => {
      dispatch(resetCount());
    };
  }, []);

  const IncreaseCount = () => {
    dispatch(increaseCount());
  };

  const DecreaseCount = () => {
    dispatch(decreaseCount());
  };

  return (
    <>
      <CustomHeader screenName="Redux Example" navigation={navigation} />

      <View style={styles.container}>
        <Text style={styles.countText}>{count}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => IncreaseCount()}>
            <Text style={styles.buttonText}>
              {string.increment.toUpperCase()}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => DecreaseCount()}>
            <Text style={styles.buttonText}>
              {string.decrement.toUpperCase()}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default CounterExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: 'darkblue',
    padding: 10,
    marginTop: 20,
    width: 170,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  countText: {
    alignSelf: 'center',
    fontSize: 30,
    marginBottom: 50,
    color: 'black',
  },
});
