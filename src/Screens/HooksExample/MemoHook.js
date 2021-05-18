import React, {useState, useMemo, useEffect, useCallback} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';

const DisplayText = React.memo(({text}) => {
  // console.log("displayText");
  return <Text style={styles.text}>Entered Text is {text}</Text>;
});

const calculateSquare = (count) => {
  //   let i = 1;
  //   while (i < 200000000) i++;
  return count * count;
};

// const DisplayText = ({ displayText }) => {
//   const [text, setText] = useState("");

//   useEffect(() => {
//     setText(displayText());
//     console.log("component rendered");
//   }, [displayText]);

// return <Text style={styles.text}>Entered Text is {text}</Text>;
// };

const MemoHook = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('Shobha');

  const result = useMemo(() => {
    return calculateSquare(count);
  }, [count]);

  //   const value = calculateSquare(count);

  // const displayText = useCallback(() => {
  //   return text;
  // }, [text]);

  // const displayText = () => {
  //   return text;
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>useMemo and useCallback Hooks</Text>
      <Text style={[styles.text, {marginTop: 80}]}>
        Square of {count} is {result}
      </Text>
      <View style={styles.button}>
        <Button title="Increment" onPress={() => setCount(count + 1)} />
        <Button title="Decrement" onPress={() => setCount(count - 1)} />
      </View>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={(e) => setText(e)}
        type="text"
      />
      <DisplayText text={text} />
      {/* <DisplayText displayText={displayText} /> */}
    </View>
  );
};

export default MemoHook;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginBottom: 10,
    width: 300,
    fontSize: 20,
    marginTop: 40,
    alignSelf: 'center',
  },
  text: {
    fontSize: 20,
    marginVertical: 10,
    alignSelf: 'center',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
});
