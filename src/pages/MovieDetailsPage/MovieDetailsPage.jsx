import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { Suspense, useEffect, useRef, useState } from "react";
import css from "./MovieDetailsPage.module.css"
import { fetchMovieById } from "../../moviesAPIrequest";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);
  const [fetchError, setFetchError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const backLinkURLRef = useRef(location.state?.from || "/");

  useEffect(() => {
    async function fetchFilmById() {
      try {
        setFetchError(false);
        setIsLoading(true);
        const data = await fetchMovieById(movieId);
        setFilm(data);

        
        if (data) {
          document.title = data.original_title || "Movie Details";
        }
      } catch {
        setFetchError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchFilmById();
  }, [movieId]);

  return (
    <div>
      <Link to={backLinkURLRef.current} className={css.backLink}>
        Go back
      </Link>
      {isLoading && <b>Loading information about the film...</b>}{" "}
      {fetchError && <b>Ooups something is wrong!</b>}{" "}
      {film ? ( 
        <div className={css.container}>
          <img
            src={
              film.poster_path
                ? `https://image.tmdb.org/t/p/w300${film.poster_path}`
                : "fallback-image-url" 
            }
            alt={film.original_title || "film poster"}
            className={css.poster}
          />
          <div>
            <h2>{film.original_title}</h2>
            <p>User score: {film.vote_average * 10}%</p> <h2>Overview</h2>
            <p>{film.overview}</p>
            <h2>Genres</h2>
            <ul>
              {film.genres.map((el) => (
                <li key={el.id}>{el.name}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        !isLoading && <p>Film not found.</p> 
      )}
      <hr />
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<b>Loading nested route...</b>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
