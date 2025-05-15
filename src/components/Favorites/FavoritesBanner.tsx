import blade from "../../assets/Blade Runner 2049(2).jpg";


const FavoritesBanner = ()=>{
    return (
        <div className="favorites__banner">
        <div className="gradient__overlay"></div>
        <img src={blade} alt="" />
      </div>
    )
}
export default FavoritesBanner