import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Top_Rated_Movie, options } from '../utils/constant';
import { getTopRatedMovies } from '../redux/movieSlice';
import { useEffect } from 'react';

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(Top_Rated_Movie, options);
        dispatch(getTopRatedMovies(res.data.results));
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [dispatch]);
};

export default useTopRatedMovies;
