import React, {useState, useRef, useImperativeHandle, forwardRef} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

import CustomHeader from '../../Components/customHeader';

import {string} from '../../Config/string';
import {colors} from '../../Styles/colors';

const ImperativeHandle = ({navigation}) => {
  const ref = useRef();
  //   console.log("ref>..", ref);
  return (
    <>
      <CustomHeader
        screenName="useImperativeHandle Example"
        navigation={navigation}
        backArrow={true}
      />
      <View style={styles.container}>
        {/* <Text style={styles.heading}>
          {string.use_imperative_handle_example}
        </Text> */}
        <Counter ref={ref} />
        <View style={styles.button}>
          <Button
            title="Decrement from parent"
            onPress={() => ref.current.decrement()}
          />
        </View>
      </View>
    </>
  );
};

const Counter = forwardRef((props, ref) => {
  const [counter, setCounter] = useState(0);

  useImperativeHandle(ref, () => ({
    increment,
    decrement: () => {
      setCounter(counter - 1);
    },
  }));

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <Text style={styles.text}>Counter : {counter}</Text>
      <View style={styles.button}>
        <Button title="Increment from Child" onPress={() => increment()} />
      </View>
    </>
  );
});

export default ImperativeHandle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  button: {
    marginTop: 20,
    width: 200,
  },
  text: {
    marginTop: 80,
    fontSize: 30,
  },
});
