import { addFavoritesMovie, removeFavoritesMovie } from "../../../Redux/slices/favoritesSlice";
import Rating from "../Rating";
import { useDispatch } from "react-redux";

export default function MainInfoLeft(props) {
  if (props.searchFilm.status === "loading" || !props.searchFilm.film) {
    return <p>Loading...</p>;
  }
  const dataFilm = props.searchFilm.film;

  const dispatch = useDispatch()

  return (
    <>
      <div className="main__info-left">
        <div style={{ display: "flex", gap: 15 }} className="buttons">
          <button className="button-favorite" onClick={()=>dispatch(addFavoritesMovie(dataFilm))}>Add in favorite</button>
          <button className="button-favorite delete" onClick={()=>dispatch(removeFavoritesMovie(dataFilm))}>
            Delete from favorite
          </button>
        </div>
        <div className="main__info-left-title">
          <p>{dataFilm.title}</p>
          <Rating />
        </div>
        <div className="main__info-left-categoryes">
          {dataFilm.categoryes.map((value, index) => (
            <p key={index}>{value}</p>
          ))}
        </div>
        <div className="main__info-left-about">
          <p>Description</p>
          <p>{dataFilm.description}</p>
        </div>
      </div>
    </>
  );
}
