// import axios from "axios";
// import {Now_Playing_Movie , options} from '../utils/constant';
// import {getNowPlayingMovies} from '../redux/movieSlice';
// import {useDispatch} from 'react-redux';
// import { useEffect } from 'react';









// const useNowPlayingMovies =async()=>{
//     const dispatch = useDispatch();
//     try {
      
//       const res = await axios.get(Now_Playing_Movie ,options);
//       dispatch(getNowPlayingMovies(res.data.results));
//     } catch (error) {
      
//     }
//   }

//   export default useNowPlayingMovies;



  import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Now_Playing_Movies, options } from '../utils/constant';
import { getNowPlayingMovies } from '../redux/movieSlice';
import { useEffect } from 'react';

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get(Now_Playing_Movies, options);
        dispatch(getNowPlayingMovies(res.data.results));
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [dispatch]);
};

export default useNowPlayingMovies;
