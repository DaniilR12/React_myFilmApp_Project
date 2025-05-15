import { configureStore } from "@reduxjs/toolkit";
import movies from './slices/moviesSlice'
import favoritesSlice from './slices/favoritesSlice'


const store = configureStore({
    reducer:{
        movies,
        favoritesSlice
    }
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;