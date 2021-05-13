import React, {useState, createContext} from 'react';
import Movie from './movie';
import AddMovie from './addMovie';

export const MovieContext = createContext();

export const MovieProvider = () => {
  const [movie, setMovie] = useState([
    {
      name: 'Frozen',
      rating: 9,
    },
    {
      name: 'The Boss Baby',
      rating: 8,
    },
    {
      name: 'Scooby-Doo',
      rating: 7.5,
    },
    {
      name: 'Tinker Bell',
      rating: 4,
    },
  ]);

  return (
    <MovieContext.Provider value={[movie, setMovie]}>
      <AddMovie />
      <Movie />
    </MovieContext.Provider>
  );
};
