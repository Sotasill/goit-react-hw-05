import { Link, useLocation } from "react-router-dom";
import css from "./MoviesList.module.css";

export default function FilmList({ data }) {
  
  const location = useLocation();

  return (
    <ul className={css.list}>
      {data.length > 0 ? (
        data.map((el) => (
          <li key={el.id}>
            <Link to={`/movies/${el.id}`} state={location}>
              <div>{el.title}</div>
            </Link>
          </li>
        ))
      ) : (
        <li>No movies found.</li> 
      )}
    </ul>
  );
}
