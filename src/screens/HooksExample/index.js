import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const MainScreen = ({navigation}) => {
  const hooksList = [
    {
      title: 'ContextHook',
      navigateTo: 'ContextHook',
    },
    {
      title: 'ReducerHook',
      navigateTo: 'ReducerHook',
    },
    {
      title: 'UseRefHook',
      navigateTo: 'UseRefHook',
    },
    {
      title: 'MemoHook',
      navigateTo: 'MemoHook',
    },
    {
      title: 'ImperativeHandle',
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
