import React, {useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {MovieContext} from './movieContext';
import MovieList from './movieList';

function Movie() {
  const [movie, setMovie] = useContext(MovieContext);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Movie Name</Text>
        <Text style={styles.text}>Rating</Text>
      </View>
      {movie.map((movie) => (
        <MovieList name={movie.name} rating={movie.rating} />
      ))}
    </View>
  );
}

export default Movie;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    flex: 1,
    textAlign: 'center',
    marginVertical: 5,
  },
});
