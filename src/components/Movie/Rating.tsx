import star from "../../assets/icons/star.png";
import starEmpty from "../../assets/icons/starEmpty.png";
import { useState, useEffect, memo } from "react";

 function Rating({ movieId, userId }) {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const savedRatings = JSON.parse(localStorage.getItem("movieRatings")) || {};
    if (savedRatings[movieId] && savedRatings[movieId][userId]) {
      setRating(savedRatings[movieId][userId]);
    }
  }, [movieId, userId]);


  function handleClick(newRating) {
    setRating(newRating);

    const savedRatings = JSON.parse(localStorage.getItem("movieRatings")) || {};

    if (!savedRatings[movieId]) {
      savedRatings[movieId] = {};
    }
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

export default memo(Rating);