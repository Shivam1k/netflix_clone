import axios from "axios";
import { Popular_Movie, options } from "../utils/constant";
import { getPopularMovies } from "../redux/movieSlice";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';


// const usePopularMovies = async () => {
//     const dispatch = useDispatch();

//   try {
//     const res = axios.get(Popular_Movie, options);
//     dispatch(getPopularMovies(res.data.results));
//   } catch (error) {
//     console.error(error);
//   }
// };

// export default usePopularMovies;




const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get( Popular_Movie, options);
        dispatch(getPopularMovies(res.data.results));
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [dispatch]);
};

export default usePopularMovies;

