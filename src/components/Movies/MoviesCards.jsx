import { useSelector } from "react-redux";
import MoviesCard from "./MoviesCard";

export default function MoviesCards() {
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
