import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "./moviesSlice";

interface FavoritesState{
    favoritesMovies: Movie[],
    status: string,
    currentUser: string| null,
}

function loadFavoritesMovies(userName:string):Movie[] {
    const dataLocal = localStorage.getItem(`favoritesMovies_${userName}`);
    const parseData = dataLocal ? JSON.parse(dataLocal) : [];
    return parseData;
}

const initialState:FavoritesState = {
    favoritesMovies: [],
    status: "loading",
    currentUser: null,
};

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        initFavorites: (state, action:PayloadAction<string>) => {
            const userName = action.payload;
            state.currentUser = userName;
            state.favoritesMovies = loadFavoritesMovies(userName);
            state.status = "loaded";
        },
        addFavoritesMovie: (state, action:PayloadAction<Movie>) => {
            const movie = action.payload;
            const userName = state.currentUser;
            if (!userName) return;

            const isAlreadyFavorite = state.favoritesMovies.some(
                (item) => item.id === movie.id
            );

            if (!isAlreadyFavorite) {
                state.favoritesMovies.push(movie);
                localStorage.setItem(
                    `favoritesMovies_${userName}`,
                    JSON.stringify(state.favoritesMovies)
                );
            }
        },
        removeFavoritesMovie: (state, action:PayloadAction<Movie>) => {
            const movie = action.payload;
            const userName = state.currentUser;
            if (!userName) return;

            state.favoritesMovies = state.favoritesMovies.filter(
                (item) => item.id !== movie.id
            );
            localStorage.setItem(
                `favoritesMovies_${userName}`,
                JSON.stringify(state.favoritesMovies)
            );
        },
    },
});

export default favoritesSlice.reducer;
export const { addFavoritesMovie, removeFavoritesMovie, initFavorites } =
    favoritesSlice.actions;
