import { useDispatch, useSelector } from "react-redux";
import MoviesCard from "./MoviesCard";
import { useEffect } from "react";
import { clearFilters } from "../../Redux/slices/moviesSlice";

export default function FavoriteMovies() {
  const dispatch = useDispatch();

  const { favoritesMovies } = useSelector((store) => store.favoritesSlice);

  const { filterMoviesCategories, filteredMovies } =
    useSelector((store) => store.movies);

  useEffect(() => {
    dispatch(clearFilters());
  }, [dispatch]);

  const favoritesId = favoritesMovies.map((movie) => movie.id);

  const baseList =
    filterMoviesCategories.length > 0
      ? filterMoviesCategories
      : filteredMovies.length > 0
      ? filteredMovies
      : favoritesMovies;

  const moviesToShow = favoritesId
    .map((id) => baseList.find((movie) => movie.id === id))
    .filter(Boolean);

 

  return (
    <>
      {moviesToShow.length > 0 ? (
        moviesToShow.map((movie) => <MoviesCard key={movie.id} {...movie} />)
      ) : (
        <p>You don't have favorite movies.</p>
      )}
    </>
  );
}
