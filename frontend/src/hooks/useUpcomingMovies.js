import { useDispatch } from 'react-redux';
import axios from 'axios';
import { up_Coming_Movies, options } from '../utils/constant';
import { getUpComingMovies } from '../redux/movieSlice';
import { useEffect } from 'react';

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(up_Coming_Movies, options);
        dispatch(getUpComingMovies(res.data.results));
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [dispatch]);
};

export default useUpcomingMovies;
