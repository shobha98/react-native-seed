import React from 'react';
import {View, StyleSheet} from 'react-native';
import CustomHeader from '../../Components/customHeader';
import Post from './posts';

const ReduxSagaExample = ({navigation}) => {
  return (
    <>
      <CustomHeader screenName="Redux-Saga Example" navigation={navigation} />
      <View style={styles.container}>
        <Post />
      </View>
    </>
  );
};

export default ReduxSagaExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
