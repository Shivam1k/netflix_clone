import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const MovieContainer = () => {
  const movie = useSelector(store=>store.movie);
  return (
    <div className="bg-black">
      <div className="-mt-52 relative z-20"> 
        <MovieList title={"Polular Movies"} movies={ movie.popularMovie}/>
        <MovieList title={"Now Playing Movies"} movies={ movie.nowPlayingMovies}/>
        <MovieList title={"Top Rated Movies"} movies={ movie.topRatedMovies}/>
        <MovieList title={"UpComing Movies"} movies={ movie.upComingMovies}/>
      </div>
    </div>
  );
};

export default MovieContainer;
