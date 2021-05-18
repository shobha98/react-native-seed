import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {string} from '../../Config/string';

const MainScreen = ({navigation}) => {
  const hooksList = [
    {
      title: string.context_hook,
      navigateTo: 'ContextHook',
    },
    {
      title: string.reducer_hook,
      navigateTo: 'ReducerHook',
    },
    {
      title: string.use_ref_hook,
      navigateTo: 'UseRefHook',
    },
    {
      title: string.memo_hook,
      navigateTo: 'MemoHook',
    },
    {
      title: string.imperative_handle,
      navigateTo: 'ImperativeHandle',
    },
  ];

  return (
    <View styles={styles.container}>
      {hooksList.map((item) => (
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate(item.navigateTo)}>
          <Text style={styles.text}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: 'darkred',
    padding: 10,
    marginVertical: 15,
    minWidth: 300,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
