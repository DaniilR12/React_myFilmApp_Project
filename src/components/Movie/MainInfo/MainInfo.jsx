import { useEffect } from "react";
import {
  fetchMovies,
  searchFilmInState,
} from "../../../Redux/slices/moviesSlice";
import MainInfoLeft from "./MainInfoLeft";
import MainInfoRight from "./MainInfoRight";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function MainInfo() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const {searchFilm ,status} = useSelector((store) => store.movies);

  useEffect(() => {
    if(status === 'fulfilled'){
      dispatch(searchFilmInState({ id }));
    }
  }, [dispatch, id,status]);

  if (searchFilm.status === "loading" || !searchFilm.film) {
    return <p style={{color:'white'}}>Loading... Wait a minute...</p>;
  }

  return (
    <div className="main__info">
      <>
        <MainInfoLeft searchFilm={{ ...searchFilm }} />
        <MainInfoRight searchFilm={{ ...searchFilm }} />
      </>
    </div>
  );
}
