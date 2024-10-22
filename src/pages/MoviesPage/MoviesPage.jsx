import { useEffect, useState } from "react";
import FilmSearchForm from "../../components/SearchBar/SearchBar";
import { searchMovieByName } from "../../moviesAPIrequest";
import FilmList from "../../components/MoviesList/MoviesList";
import { useSearchParams } from "react-router-dom";

export default function FilmsPage() {
  const [movies, setMovies] = useState([]); 
  const [fetchError, setFetchError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieParam = searchParams.get("query") ?? ""; 

  useEffect(() => {
    async function fetchNewMovie() {
      
      if (movieParam === "") {
        setMovies([]);
        return;
      }

      try {
        setFetchError(false);
        setIsLoading(true);
        const data = await searchMovieByName(movieParam);
        if (Array.isArray(data)) {
          setMovies(data);
        } else {
          setFetchError(true);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
        setFetchError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchNewMovie();
  }, [movieParam]);

  const handleSearchMovie = (newMovie) => {
    
    setSearchParams({ query: newMovie });
  };

  return (
    <div>
      <FilmSearchForm onSearch={handleSearchMovie} disabled={isLoading} />
      {fetchError && <p>Oops, something went wrong!</p>}
      {isLoading && <p>Loading, please wait...</p>}
      {movies.length > 0 ? ( 
        <FilmList data={movies} /> 
      ) : (
        !isLoading &&
        !fetchError &&
        movieParam && <p>No results found for {movieParam}.</p> 
      )}
    </div>
  );
}
