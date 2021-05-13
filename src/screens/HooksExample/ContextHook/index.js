import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {MovieProvider} from './Movie/movieContext';
import AddMovie from './Movie/addMovie';
import Movie from './Movie/movie';

function ContextHook() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>useContext Example</Text>
      <MovieProvider>
        <AddMovie />
        <Movie />
      </MovieProvider>
    </View>
  );
}

export default ContextHook;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 30,
    alignSelf: 'center',
  },
});
