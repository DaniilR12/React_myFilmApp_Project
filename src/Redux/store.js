import { configureStore } from "@reduxjs/toolkit";
import movies from './slices/moviesSlice'
import favoritesSlice from './slices/favoritesSlice'


const store = configureStore({
    reducer:{
        movies,
        favoritesSlice
    }
});

export default store;