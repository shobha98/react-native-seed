import React from 'react';
import {View, StyleSheet} from 'react-native';
import Post from './posts';

const ReduxSagaExample = () => {
  return (
    <View style={styles.container}>
      <Post />
    </View>
  );
};

export default ReduxSagaExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
