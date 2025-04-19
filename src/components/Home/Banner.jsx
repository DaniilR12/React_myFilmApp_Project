import titanik from '../../assets/videos/Титаник (1997) «Titanic» - Трейлер (Trailer) - Что посмотреть_ (1080p, h264).mp4'
import background from '../../assets/background.jpg'
import {Link} from 'react-router-dom'


export default function Banner(){
    return (
        <>
        <div className="header__banner">
        <div>
          <p>REACT CINEMA</p>
          <p>
            Subheading that sets up context, shares more info about the website,
            or generally gets people psyched to keep scrolling.{" "}
          </p>
          <div>
            <a href="#movies">Movies</a>
            <button ><Link style={{color:"white",textDecoration:'none'}} to='/favorites'>Favorites</Link></button>
          </div>
        </div>
        <video autoPlay muted loop>
          <source
            src={titanik}
            type="video/mp4"
          />
        </video>
        <img src={background} alt="" />
      </div>
        </>
    )
}