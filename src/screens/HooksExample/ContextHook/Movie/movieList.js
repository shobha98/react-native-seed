import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function MovieList({name, rating}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{rating}</Text>
    </View>
  );
}

export default MovieList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 15,
    color: 'black',
    marginVertical: 5,
    flex: 1,
    textAlign: 'center',
  },
});
