import { useSelector } from "react-redux";
import MoviesCard from "./MoviesCard";

export default function FavoriteMovies() {
  const { favoritesMovies } = useSelector((store) => store.favoritesSlice);

  const { filterMoviesCategories } = useSelector((store) => store.movies)

  const favoritesId = favoritesMovies.map(movie=>movie.id)
  const moviesToShow = filterMoviesCategories.length > 0 ?
  filterMoviesCategories.filter(film=>favoritesId.includes(film.id)):favoritesMovies
  console.log(filterMoviesCategories);
  

  return (
    <>
      {moviesToShow && moviesToShow.length > 0 ? (
        moviesToShow.map((value, index) => (
          <MoviesCard key={index} {...value} />
        ))
      ) : (
        <p>You don't have favorite movies.</p>
      )}
    </>
  );
}

