import FavoritesBanner from "../components/Favorites/FavoritesBanner";
import FavoritesList from "../components/Favorites/FavoritesList";
import Filter from "../components/Filter/Filter";
import MoviesList from "../components/Movies/MoviesList";
import MoviesScroll from "../components/Movies/MoviesScroll";

export default function Favorites() {
  const token = localStorage.getItem("token");
  return (
    <>
      <FavoritesBanner />
      <div className="container">
        <Filter />
        <div className="favorites_movies">
          <FavoritesList />
          {token ? (
            <MoviesList />
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: 1070,
                textAlign: "center",
              }}
            >
              <h1 style={{ color: "white" }}>
                Favorite movies are available only to authorized users...
              </h1>
              <h2 style={{ color: "white", fontSize: 40 }}>
                Please log in or register
              </h2>
            </div>
          )}
        </div>
        <MoviesScroll />
      </div>
    </>
  );
}
