import { useDispatch, useSelector } from "react-redux";
import MoviesCard from "./MoviesCard";
import { useEffect } from "react";
import { clearFilters } from "../../Redux/slices/moviesSlice";
import { AppDispatch, RootState } from "../../Redux/store";

export default function MoviesCards() {
  const dispatch:AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(clearFilters());
  }, [dispatch]);
  const { films, filteredMovies, filterMoviesCategories } = useSelector(
    (store:RootState) => store.movies
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
