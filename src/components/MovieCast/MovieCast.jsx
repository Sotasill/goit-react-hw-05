import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../moviesAPIrequest.js"; 
import css from './MovieCast.module.css'

export default function CastDetails() {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    
    async function fetchCast() {
      try {
        setHasError(false);
        const castData = await fetchMovieCast(movieId);
        setActors(castData);
      } catch {
        setHasError(true);
      }
    }

    fetchCast(); 
  }, [movieId]);

  return (
    <div className={css.container}>
      {hasError && <p>Oops, something went wrong!</p>}
      {actors && actors.length > 0 ? (
        <ul>
          {actors.map((actor) => (
            <li key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                    : "/path/to/placeholder.jpg"
                }
                alt={
                  actor.profile_path
                    ? `${actor.name} photo`
                    : "No photo available"
                }
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No actor information found.</p>
      )}
    </div>
  );
}
