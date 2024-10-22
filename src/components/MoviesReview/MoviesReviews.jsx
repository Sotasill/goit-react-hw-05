import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../moviesAPIrequest";
import css from './MoviesReview.module.css'

export default function FilmReviews() {
  const { movieId } = useParams();
  const [reviewList, setReviewList] = useState([]); 
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    async function fetchFilmReviews() {
      try {
        setHasError(false);
        const reviewsData = await fetchMovieReviews(movieId);
        setReviewList(reviewsData);
      } catch {
        setHasError(true);
      }
    }
    fetchFilmReviews();
  }, [movieId]);

  return (
    <div className={css.reviewContainer}>
      {hasError && (
        <div>Ooups something went wrong while fetching reviews!</div>
      )}
      {reviewList.length === 0 && <p>There were no reviews available.</p>}
      {reviewList.length > 0 && (
        <ul>
          {reviewList.map((review) => (
            <li key={review.id} className={css.reviewItem}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
