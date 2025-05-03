import { useDispatch, useSelector } from "react-redux";
import MoviesCard from "./MoviesCard";
import { useEffect } from "react";
import { clearFilters } from "../../Redux/slices/moviesSlice";

export default function MoviesCards() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearFilters());
  }, [dispatch]);
  const { films, filteredMovies, filterMoviesCategories } = useSelector(
    (store) => store.movies
  );
  const moviesToShow = filteredMovies.length > 0 ? filteredMovies : films;

  return (
    <>
      {filterMoviesCategories.length > 0
        ? filterMoviesCategories.map((value, index) => (
            <MoviesCard key={index} {...value} />
          ))
        : moviesToShow.map((value, index) => (
            <MoviesCard key={index} {...value} />
          ))}
    </>
  );
}
