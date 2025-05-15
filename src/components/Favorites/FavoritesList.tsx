import { useSelector } from "react-redux";
import FavoritesCard from "./FavoritesCard";
import React from "react";
import { Movie } from "../../Redux/slices/moviesSlice";

type Ratings = Record<string,number>

type FilmRating ={
  movieId:string,
  averageRating:number
}

type RootState ={
  movies:{
    films:Movie[]
  }
}

const FavoritesList: React.FC = () => {
  const { films } = useSelector((store:RootState) => store.movies);

  const rawData = localStorage.getItem("movieRatings")
  const topFilmsData : Record<string,Ratings> = rawData ? JSON.parse(rawData):{};

  const filmsWithRatings:FilmRating[] = Object.entries(topFilmsData).map(
    ([movieId, ratings]) => {
      const allRatings = Object.values(ratings);
      const averageRating =
        allRatings.reduce((acc, r) => acc + r, 0) / allRatings.length;
      return { movieId, averageRating };
    }
  );

  const top5Films = filmsWithRatings
    .sort((a, b) => b.averageRating - a.averageRating)
    .slice(0, 5);

  return (
    <>
      <div className="top-movies">
        <p>Top Rated Films</p>
        {top5Films.map((film) => {
          const filmData = films.find((f) => f.id.toString() === film.movieId);
          if (!filmData) return null;

          return <FavoritesCard key={filmData.id} film={filmData} />;
        })}
      </div>
    </>
  );
};

export default FavoritesList