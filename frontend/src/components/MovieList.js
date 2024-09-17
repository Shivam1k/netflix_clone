

import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies  }) => {
  // Ensure that the movies array exists, otherwise fallback to an empty array
  const movieList = movies || [];

  console.log(movieList);

  return (
    <div className="px-8">
      <h1 className="text-3xl text-white p-3">{title}</h1>

      <div className="flex overflow-x-auto  no-scrollbar cursor-pointer">
        <div className="flex items-center">
          {movieList.length > 0 ? (
            movieList.map((movie) => <MovieCard key={movie.id} movieId={movie.id}  posterPath={movie.poster_path}/>)
          ) : (
            <p className="text-white">No movies available</p> // Show message if no movies
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
