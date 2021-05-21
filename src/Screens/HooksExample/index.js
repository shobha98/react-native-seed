import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import CustomHeader from '../../Components/customHeader';

import {string} from '../../Config/string';
import {colors} from '../../Styles/colors';

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
    <>
      <CustomHeader screenName="Hooks Example" navigation={navigation} />
      <View style={styles.container}>
        {hooksList.map((item) => (
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(item.navigateTo)}>
            <Text style={styles.text}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'darkred',
    padding: 10,
    marginVertical: 15,
    minWidth: 300,
    alignItems: 'center',
    borderRadius: 15,
  },
  text: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
