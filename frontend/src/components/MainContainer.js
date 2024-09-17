// import React from 'react';
// import VideoBackground from './VideoBackground';
// import VideoTitle from './VideoTitle';
// import { useSelector } from 'react-redux';

// const MainContainer = () => {
//   const movie = useSelector(store => store.movie?.nowPlayingMovies);
//   if (!movie || movie.length < 3) return null;

//   const { overview, title, id } = movie[2];

//   return (
//     <div>
//       <VideoTitle title={title} overview={overview} />
//       <VideoBackground movieId={id} />
//     </div>
//   );
// };

// export default MainContainer;



import React from 'react';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const movie = useSelector(store => store.movie?.nowPlayingMovies);
  
  // Check if movie exists and has enough items
  if (!movie || movie.length === 0) return null;

  // Get a random index from the movie array
  const randomIndex = Math.floor(Math.random() * movie.length);

  // Get the random movie using the random index
  const { overview, title, id } = movie[randomIndex];

  return (
    <div>
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
