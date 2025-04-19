import { useSelector } from "react-redux";
import MoviesCard from "./MoviesCard";

export default function FavoriteMovies() {
  const { favoritesMovies } = useSelector((store) => store.favoritesSlice);

  return (
    <>
      {favoritesMovies.length > 0 ? (
        favoritesMovies.map((value, index) => (
          <MoviesCard key={index} {...value} />
        ))
      ) : (
        <p>You don`t have favorites Movie</p>
      )}
    </>
  );
}
