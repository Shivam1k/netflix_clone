export const API_END_POINT = "http://localhost:8080/api/v1/user/";

export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MGFkYTE1NjJlYjA5NzIyMTM3ZWUzYTAyY2M1NWEwOSIsIm5iZiI6MTcyNjM2OTExMS4xNzQyOTksInN1YiI6IjY2ZTY0OTlhMDUwZjE0ZTRmY2NmNGQ5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9xeioVYzXOyR_25EvCGETumdipC-80ny3EsacjVYqL0'
    }
  };

  export  const Now_Playing_Movies ="https://api.themoviedb.org/3/movie/now_playing"
  export  const Popular_Movie =" https://api.themoviedb.org/3/movie/popular"
  export const Top_Rated_Movie =" https://api.themoviedb.org/3/movie/top_rated"
  export const up_Coming_Movies = "https://api.themoviedb.org/3/movie/upcoming"

  export const TMDB_IMG_URL ="https://image.tmdb.org/t/p/w500"

 export const SEARCH_MOVIE_URL = 'https://api.themoviedb.org/3/search/movie?query=';