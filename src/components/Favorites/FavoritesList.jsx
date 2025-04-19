import FavoritesCard from "./FavoritesCard";

export default function FavoritesList() {
  return (
    <>
      <div className="top-movies">
        <p>Top Rated Films</p>
        <FavoritesCard />
        <FavoritesCard />
        <FavoritesCard />
        <FavoritesCard />
        <FavoritesCard />
      </div>
    </>
  );
}
