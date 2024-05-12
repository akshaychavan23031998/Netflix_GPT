import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList'; // Added closing single quote and semicolon

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames || movieResults) return null;
  return (
    <div className='p-4 m-4 bg-black opacity-90 text-white'>
      {movieNames.map((movieName, index) => (
        <MovieList key={movieName} title={movieName} movies={movieResults[index]} /> 
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
