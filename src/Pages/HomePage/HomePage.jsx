import { useEffect, useState } from "react";
import MovieList from "../../components/MoviesList/MoviesList";
import { fetchPopularMovies } from "../../moviesAPIrequest";
import css from './HomePage.module.css'

export default function HomePage() {
  const [movies, setMovies] = useState([]); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true); 
        const data = await fetchPopularMovies(); 
        setMovies(data); 
      } catch (err) {
        setError("Failed to fetch movies. Please try again."); 
        console.error("Error fetching movies:", err); 
      } finally {
        setLoading(false); 
      }
    }
    fetchMovies(); 
  }, []); 

  return (
    <div className={css.container}>
      <h2>Popular Movies</h2>
      {loading && <b>Loading...</b>} 
      {error && <b>{error}</b>} 
      {movies.length > 0 ? (
        <MovieList data={movies} /> 
      ) : (
        !loading && !error && <p>No popular movies available at the moment.</p> 
      )}
    </div>
  );
}
