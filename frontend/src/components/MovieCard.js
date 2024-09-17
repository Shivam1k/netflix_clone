import React from 'react'
import { TMDB_IMG_URL } from '../utils/constant';
import { setOpen, getId } from '../redux/movieSlice';
import { useDispatch } from 'react-redux';

const MovieCard = ({posterPath , movieId}) => {

  const dispatch = useDispatch();

  if(posterPath === null) return null;

  const handleopen =()=>{
    dispatch(getId(movieId));
    dispatch(setOpen(true));
  }
  return (
    <div className='w-48 pr-2' onClick={handleopen}>
        <img src={`${TMDB_IMG_URL}/${posterPath}`} alt='movie-banner'/>
    </div>
  )
}

export default MovieCard;