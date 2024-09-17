




import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import searchReducer from "./searchSlice"; // This imports the reducer from your slice

const store = configureStore({
    reducer: {
        app: userReducer,      // Name it `app` to access as store.app
        movie: movieReducer,   // Name it `movie` to access as store.movie
        search: searchReducer  // Change from `searchSlice` to `search` to match the useSelector hook
    }
});

export default store;