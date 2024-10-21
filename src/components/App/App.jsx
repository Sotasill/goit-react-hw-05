import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "/src/App.css";
import Loader from "/src/components/Loader/Loader.jsx";


const HomePage = lazy(() => import("../../Pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../Pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../../Pages/MovieDetailsPage/MovieDetailsPage"));

const NotFoundPage = lazy(() =>
  import("../../Pages/NotFoundPage/NotFoundPage")
);
const MovieCast = lazy(() => import("../MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("../MoviesReview/MoviesReviews"));


function App() {
  return (
    <>
      <Loader>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
            <Route path='/movies/:movieId/cast' element={<MovieCast />} />
            <Route path='/movies/:movieId/reviews' element={<MovieReviews />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Loader>
    </>
  );
  
}

export default App;
