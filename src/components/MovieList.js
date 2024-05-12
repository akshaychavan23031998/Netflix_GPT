import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({title, movies}) => {
  // console.log(movies);
  // Check if movies is null or undefined
  if (!movies) {
    return null; // or render a loading indicator or error message
  }
  return (
    <div className='px-5 text-white'>
      <h1 className='text-2xl py-5'>{title}</h1>
      <div className='flex overflow-x-scroll'>
        <div className='flex'>
          {movies?.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path} /> )}
        </div>
      </div>
    </div>
  )
}

export default MovieList;

// {/* Check if movies array has at least one element before accessing it */}
// {movies.length > 0 && <MovieCard posterPath={movies[0].poster_path} />}
// <MovieCard posterPath={movies[0].poster_path} />