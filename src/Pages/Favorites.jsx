import FavoritesBanner from "../components/Favorites/FavoritesBanner";
import FavoritesList from "../components/Favorites/FavoritesList";
import Filter from "../components/Filter/Filter";
import MoviesList from "../components/Movies/MoviesList";
import MoviesScroll from "../components/Movies/MoviesScroll";

export default function Favorites() {
  return (
    <>
    <FavoritesBanner/>
      <div className="container">
        <Filter />
        <div className="favorites_movies">
          <FavoritesList />
          <MoviesList />
        </div>
        <MoviesScroll />
      </div>
    </>
  );
}
