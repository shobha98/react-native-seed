import React, {useState, useContext} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

import {MovieContext} from './movieContext';

function AddMovie() {
  const [movie, setMovie] = useContext(MovieContext);

  const movieName = useAddMovie('');
  const movieRating = useAddMovie('');

  function handleSubmit(e) {
    setMovie((prevMovie) => [
      ...prevMovie,
      {name: movieName.value, rating: movieRating.value},
    ]);
  }

  return (
    <View style={styles.container}>
      <TextInput
        type="text"
        value={movieName.value}
        onChangeText={movieName.handleChange}
        placeholder="Enter movie name"
        style={styles.input}
      />
      <TextInput
        type="text"
        value={movieRating.value}
        onChangeText={movieRating.handleChange}
        placeholder="Enter rating"
        style={styles.input}
      />
      <Button title="Submit" onPress={() => handleSubmit()} />
    </View>
  );
}

function useAddMovie(data) {
  const [value, setValue] = useState(data);

  const handleChange = (e) => {
    setValue(e);
  };

  return {value, handleChange};
}

export default AddMovie;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    alignItems: 'center',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginBottom: 10,
    width: 200,
  },
});
