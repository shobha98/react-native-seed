import React, {useState, useEffect, useRef} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

import CustomHeader from '../../Components/customHeader';
import {colors} from '../../Styles/colors';

const UseRefHook = ({navigation}) => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('Shobha Shrivastava');

  const elementRef = useRef(null);
  const previousCounter = useRef(null);

  const handleClick = () => {
    elementRef.current.focus();
    setName('');
  };

  useEffect(() => {
    previousCounter.current = counter;
  }, [counter]);

  return (
    <>
      <CustomHeader
        screenName="useRef Example"
        navigation={navigation}
        backArrow={true}
      />
      <View style={styles.container}>
        {/* <Text style={styles.heading}>useRef Hook</Text> */}
        <TextInput
          style={styles.input}
          ref={elementRef}
          type="text"
          value={name}
          onChangeText={(e) => setName(e)}
        />
        <View style={styles.button}>
          <Button title="Click Here" onPress={() => handleClick()} />
        </View>
        <Text style={styles.text}>Current value of Counter {counter}</Text>
        {previousCounter.current !== 'undefined' && (
          <Text style={styles.text}>
            Previous value of Counter {previousCounter.current}
          </Text>
        )}
        <Button
          title="Generate Number"
          onPress={() => setCounter(Math.ceil(Math.random() * 10))}
        />
      </View>
    </>
  );
};

export default UseRefHook;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginBottom: 10,
    width: 300,
    fontSize: 20,
    marginTop: 80,
  },
  text: {
    fontSize: 20,
    marginVertical: 10,
  },
  button: {
    marginBottom: 20,
  },
});
