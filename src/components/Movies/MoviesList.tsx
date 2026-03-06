import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, clearFilters } from "../../Redux/slices/moviesSlice";
import { useLocation } from "react-router-dom";
import FavoriteMovies from "./FavoriteMoviesList";
import LoadingMovies from "./LoadingMovies";
import WeHaveProblem from "./WeHaveProblem";
import MoviesCards from "./MoviesCards";
import { AppDispatch, RootState } from "../../Redux/store";

function MoviesList() {
  const location = useLocation();
  const dispatch:AppDispatch = useDispatch();

  const { status } = useSelector((store:RootState) => store.movies);
  const [timeOut, setTimeOut] = useState(false);
  const [isFiltersCleared, setIsFiltersCleared] = useState(false);

  useEffect(() => {
    dispatch(fetchMovies());

    const timeOutId = setTimeout(() => {
      setTimeOut(true);
    }, 5000);

    return () => clearTimeout(timeOutId);
  }, [dispatch]);

  useEffect(() => {
    if (location.pathname === "/favorites") {
      dispatch(clearFilters());
      setTimeout(() => {
        setIsFiltersCleared(true);
      }, 0);
    } else {
      setIsFiltersCleared(true);
    }
  }, [location.pathname, dispatch]);

  const isFavoritesPage = location.pathname === "/favorites";

  return (
    <div id="movies" className="movies anchor">
      {isFavoritesPage ? (
        isFiltersCleared ? (
          <FavoriteMovies />
        ) : null
      ) : status === "loading" ? (
        timeOut ? (
          <WeHaveProblem />
        ) : (
          <LoadingMovies />
        )
      ) : (
        <MoviesCards />
      )}
    </div>
  );
}

export default memo(MoviesList);