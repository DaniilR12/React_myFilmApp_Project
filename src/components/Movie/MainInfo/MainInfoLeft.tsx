import { addFavoritesMovie, removeFavoritesMovie, initFavorites } from "../../../Redux/slices/favoritesSlice";
import Rating from "../Rating";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../../Redux/store";
import { Movie } from "../../../Redux/slices/moviesSlice";

export interface MainInfoLeftProps {
  searchFilm: {
    status: string;
    film: Movie | null;
  };
}

export default function MainInfoLeft({searchFilm}:MainInfoLeftProps) {
  const dispatch:AppDispatch = useDispatch();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState<boolean>(false);
  const currentUser = JSON.parse(localStorage.getItem("currentUser")||"null");

  useEffect(() => {
    // При монтировании компонента инициализируем пользователя
    if (currentUser) {
      dispatch(initFavorites(currentUser.email)); // ✅ Теперь slice будет знать currentUser
    }
  }, [dispatch]);

  if (searchFilm.status === "loading" || !searchFilm.film) {
    return <p>Loading...</p>;
  }

  const dataFilm = searchFilm.film;

  function addFavoriteMov() {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(addFavoritesMovie(dataFilm));
    } else {
      setShowModal(true);
    }
  }

  function removeFavoriteMov() {
    const token = localStorage.getItem("token");
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
          <Rating movieId={dataFilm.id} userId={currentUser.email} />
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
