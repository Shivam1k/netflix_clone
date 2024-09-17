import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useMovieByID from "../hooks/useMovieByID";

const VideoBackground = ({ movieId  }) => {
  const [loading, setLoading] = useState(true);
  const trailerMovie = useSelector(store => store.movie.trailerMovie);
  const { fetchMovieTrailer } = useMovieByID(movieId);

  useEffect(() => {
    if (movieId) {
      fetchMovieTrailer().finally(() => setLoading(false));
    }
  }, [movieId, fetchMovieTrailer]);

  if (loading) return <div>Loading...</div>;
  if (!trailerMovie) return <div>No trailer available</div>;

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerMovie.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
