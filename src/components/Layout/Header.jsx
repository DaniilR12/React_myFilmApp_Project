import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/icons/pngwing.com.png";
import heart from "../../assets/icons/icons8-червы-100.png";
import { useSelector } from "react-redux";

export default function Header() {
  const { favoritesMovies } = useSelector((store) => store.favoritesSlice);

  const token = localStorage.getItem("token");
  const userName = JSON.parse(localStorage.getItem("user") || "null");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <>
      <header>
        <Link className="header__logo-flex" to="/">
          <img src={logo} alt="logo" />
          <div className="header__logo-flex_sitename">
            <p>REACT</p>
            <p>CINEMA</p>
          </div>
        </Link>
        <ul className="header__navbar-flex">
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
          <a href="#categoryes">Movies</a>
          <a href="#categoryes">FAQ</a>
          <a href="#categoryes">Help</a>
        </ul>
        <div className="header__auth-flex">
          {token ? (
            <>
              <div className="favorites__movies">
                <img src={heart} alt="" />
                <p>{favoritesMovies.length}</p>
              </div>
              <Link to="/favorites">Hello {userName?.login}</Link>
              <button
                style={{
                  borderRadius: 7,
                  position: "absolute",
                  top: 55,
                  right: 92,
                  width: 65,
                  backgroundColor: "#c63737",
                  color: "white",
                  border: "none",
                }}
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/authorization">Login/Reg</Link>
          )}
        </div>
      </header>
    </>
  );
}
