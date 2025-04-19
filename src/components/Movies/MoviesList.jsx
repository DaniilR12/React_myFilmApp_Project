import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../Redux/slices/moviesSlice";
import { useLocation } from "react-router-dom";
import FavoriteMovies from "./FavoriteMoviesList";
import LoadingMovies from "./LoadingMovies";
import WeHaveProblem from "./WeHaveProblem";
import MoviesCards from "./MoviesCards";

export default function MoviesList(props) {
  const a = useLocation();

  const dispatch = useDispatch();
  const { status } = useSelector((store) => store.movies);

  const [timeOut, setTimeOut] = useState(false);

  useEffect(() => {
    dispatch(fetchMovies());

    const timeOutId = setTimeout(() => {
      setTimeOut(true);
    }, 5000);

    return () => clearTimeout(timeOutId);
  }, [dispatch]);

  return (
    <>
      <div id="movies" className="movies anchor">
        {a.pathname === "/favorites" ? (
          <FavoriteMovies />
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
    </>
  );
}
