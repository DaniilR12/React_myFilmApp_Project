import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import Movie from "./Pages/Movie";
import Error404 from "./Pages/Error404";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "./Redux/slices/moviesSlice";
import Auth from "./Pages/Auth";
import { initFavorites } from "./Redux/slices/favoritesSlice";
import { AppDispatch } from "./Redux/store";

export default function AppMain() {
  const dispatch:AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
    const currentUser = JSON.parse(localStorage.getItem("currentUser")||'{}');
    if (currentUser) {
      dispatch(initFavorites(currentUser.email)); // ✅ Теперь slice будет знать currentUser
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/authorization" element={<Auth/>}/>
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
