import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import CustomHeader from '../../../Components/customHeader';

import {MovieProvider} from './Movie/movieContext';
import AddMovie from './Movie/addMovie';
import Movie from './Movie/movie';
import {colors} from '../../../Styles/colors';

function ContextHook({navigation}) {
  return (
    <>
      <CustomHeader
        screenName="useContext Example"
        navigation={navigation}
        backArrow={true}
      />

      <View style={styles.container}>
        {/* <Text style={styles.heading}>useContext Example</Text> */}
        <MovieProvider>
          <AddMovie />
          <Movie />
        </MovieProvider>
      </View>
    </>
  );
}

export default ContextHook;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 30,
    alignSelf: 'center',
  },
});
