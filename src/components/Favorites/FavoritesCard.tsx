import React from "react";
import { Movie } from "../../Redux/slices/moviesSlice";

  type FavoritesCardProps={
    film:Movie
  }

const FavoritesCard:React.FC<FavoritesCardProps> = ({film})=> {

  return (
    <>
      <div className="top-movies__card">
        <div className="top-movies__card-padding">
          <img src={film.imageUrl} alt="" />
          <div className="top-movies__card-info">
            <div className="top-movies__card-info-title">
              <p>{film.title}</p>
              <p>{film.aboutInfo[1]}</p>
            </div>
            <div className="top-movies__card-info-description">
              <p>{film.category[0]}</p>
              <p>{film.categoryes[1]}</p>
              <p>{film.aboutInfo[3]}m</p>
              <p>9.1</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FavoritesCard