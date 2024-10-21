import axios from "axios";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZmEzNWRkYzUwMjhiMTA0NzYzMTcwOTY2ZTJmMGM2ZiIsIm5iZiI6MTcyOTQ2MDA1MS45NzI3MTMsInN1YiI6IjY3MTU3NWM2NmRjYTcxZTEwOWQ0YTNkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g8g6AngDeTfGLnBLgYG2_zNNypI61Zs4PpdOM5rKIvU",
  },
};

export async function fetchPopularMovies() {
  const apiUrl =
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
  const response = await axios.get(apiUrl, options);
  return response.data.results;
  
}

export async function searchMovieByName(movieName) {
  const apiUrl = `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`;
  const response = await axios.get(apiUrl, options);

  return response.data.results;
}

export async function fetchMovieById(movieId) {
  const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
  const response = await axios.get(apiUrl, options);
  return response.data;
}

export async function fetchMovieCast(movieId) {
  const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
  const response = await axios.get(apiUrl, options);

  return response.data.cast;
}

export async function fetchMovieReviews(movieId) {
  const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`;
  const response = await axios.get(apiUrl, options);

  return response.data.results;
}

