import { addFavoritesMovie, removeFavoritesMovie } from "../../../Redux/slices/favoritesSlice";
import Rating from "../Rating";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MainInfoLeft(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  if (props.searchFilm.status === "loading" || !props.searchFilm.film) {
    return <p>Loading...</p>;
  }

  const dataFilm = props.searchFilm.film;
  const token = localStorage.getItem("token");

  function addFavoriteMov() {
    if (token) {
      dispatch(addFavoritesMovie(dataFilm));
    } else {
      setShowModal(true);
    }
  }

  function removeFavoriteMov() {
    if (token) {
      dispatch(removeFavoritesMovie(dataFilm));
    } else {
      setShowModal(true);
    }
  }

  return (
    <>
      <div className="main__info-left">
        <div style={{ display: "flex", gap: 15 }} className="buttons">
          <button className="button-favorite" onClick={addFavoriteMov}>
            Add to favorites
          </button>
          <button className="button-favorite delete" onClick={removeFavoriteMov}>
            Remove from favorites
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

      {/* Модалка */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>To add favorites, please log in or register</h2>
            <div className="modal-buttons">
              <button onClick={() => navigate("/authorization")}>Log in / Reg</button>
            </div>
            <button className="close-button" onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
