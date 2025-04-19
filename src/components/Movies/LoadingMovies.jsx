import SkeletonFilm from "../Skeletons/SkeletonFilm";

export default function LoadingMovies(){
    return [...new Array(12)].map((_, index) => <SkeletonFilm key={index} />)
}