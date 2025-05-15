import { useSelector } from "react-redux";
import { searchParamInYouTube } from "../../tools/searchParamInYouTube";
import SkeletonLoadingTrailer from "../Skeletons/SkeletonLoadingTrailer";
import { RootState } from "../../Redux/store";

export default function Video() {
  const { searchFilm } = useSelector((store:RootState) => store.movies);

  if (
    searchFilm.status === "loading" ||
    !searchFilm.film ||
    !searchFilm.film.trailerUrl
  ) {
    return (
      <div className="video-wrapper">
        <SkeletonLoadingTrailer />
      </div>
    );
  }

  const trailerUrl = searchFilm?.film?.trailerUrl;
  const videoURL = trailerUrl ? searchParamInYouTube(trailerUrl) : "";

  return (
    <>
      <div className="video-wrapper">
        <iframe
          width="100%"
          height="700"
          src={`https://www.youtube.com/embed/${videoURL}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
