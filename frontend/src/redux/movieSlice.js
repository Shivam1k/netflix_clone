import {createSlice} from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie',
    initialState:{
        nowPlayingMovies: null,
        popularMovie: null,
        topRatedMovies: null,
        upComingMovies: null,
        toggle: false,
        trailerMovie:null,
        open: false,
        id:"",
       
    },
    reducers:{
        getNowPlayingMovies:(state, action)=>{
            state.nowPlayingMovies = action.payload;

        },
        getPopularMovies:(state, action)=>{
            state.popularMovie = action.payload;
        },
        getTopRatedMovies:(state, action)=>{
            state.topRatedMovies = action.payload;

        },
        getUpComingMovies:(state, action)=>{
            state.upComingMovies = action.payload;
        },

        getToggle:(state)=>{
            state.toggle = !state.toggle;
        },
        getTrailerMovie:(state , action)=>{
            state.trailerMovie = action.payload;
        },
        setOpen:(state, action)=>{
            state.open = action.payload; 
    
        },
        getId:(state, action)=>{
            state.id = action.payload;
        }

        


    }
});

export const {getNowPlayingMovies, getPopularMovies ,  getUpComingMovies, getTopRatedMovies , getToggle ,  getTrailerMovie, setOpen ,getId} = movieSlice.actions;
export default  movieSlice.reducer;





