import { Link } from "react-router-dom";
import starEmpty from "../../assets/icons/starEmpty.png";
import star from "../../assets/icons/star.png";
import { Movie } from "../../Redux/slices/moviesSlice";


export default function MoviesCard(props:Movie) {
  const id = props.id;

  function getAverageRating(movieId:string) {
    const savedRatings = JSON.parse(localStorage.getItem("movieRatings")|| '{}') ;
    const movieRatings = savedRatings[movieId];
    if (!movieRatings) return 0;

    const ratings = Object.values(movieRatings) as number[];
    const sum = ratings.reduce((acc:number, rating:number) => acc + rating, 0);
    return sum / ratings.length;
  }

  const averageRating = getAverageRating(id);
  const roundedRating = Math.round(averageRating); // округляем до целого числа звёзд

  return (
    <>
      <Link className="movies__card" to={`/movie/${id}`}>
        <div className="movies__card-rating">
          {[...Array(5)].map((_, index) => (
            <img
              key={index}
              src={index < roundedRating ? star : starEmpty}
              alt=""
            />
          ))}
        </div>
        <img src={props.imageUrl} alt="" />
      </Link>
    </>
  );
}
