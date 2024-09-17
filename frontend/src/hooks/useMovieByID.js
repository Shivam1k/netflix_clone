import axios from 'axios';
import { useDispatch } from 'react-redux';
import { options } from '../utils/constant';
import { getTrailerMovie } from '../redux/movieSlice';

const useMovieByID = (movieId) => {
  const dispatch = useDispatch();

  const fetchMovieTrailer = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`, 
        options
      );
      console.log(res.data.results);
      const trailer = res.data?.results?.filter((item) => item.type === 'Trailer');
      dispatch(getTrailerMovie(trailer.length > 0 ? trailer[0] : res.data.results[0]));
    } catch (error) {
      console.error(error);
    }
  };

  return { fetchMovieTrailer };
};

export default useMovieByID;
