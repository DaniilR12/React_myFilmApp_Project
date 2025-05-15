import star from "../../assets/icons/star.png";
import starEmpty from "../../assets/icons/starEmpty.png";
import { useState, useEffect } from "react";

export default function Rating({ movieId, userId }) {
  const [rating, setRating] = useState(0);

  // Загружаем рейтинг из localStorage при монтировании
  useEffect(() => {
    const savedRatings = JSON.parse(localStorage.getItem("movieRatings")) || {};
    if (savedRatings[movieId] && savedRatings[movieId][userId]) {
      setRating(savedRatings[movieId][userId]);
    }
  }, [movieId, userId]);


  // Сохраняем рейтинг в localStorage
  function handleClick(newRating) {
    setRating(newRating);

    const savedRatings = JSON.parse(localStorage.getItem("movieRatings")) || {};

    // Если для фильма ещё нет оценок, создаём объект
    if (!savedRatings[movieId]) {
      savedRatings[movieId] = {};
    }
    // Сохраняем оценку пользователя
    savedRatings[movieId][userId] = newRating;

    localStorage.setItem("movieRatings", JSON.stringify(savedRatings));
  }

  return (
    <>
      <div className="main__info-rating">
        {[...Array(5)].map((_, index) => (
          <img
            key={index}
            src={index < rating ? star : starEmpty}
            alt=""
            onClick={() => handleClick(index + 1)}
            style={{ cursor: "pointer", width: "30px" }}
          />
        ))}
      </div>
    </>
  );
}
