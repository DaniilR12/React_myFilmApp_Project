import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    films: [],
    filmsCategory: [],
    status: null,
    errors: null,
    searchFilm: {
        film: null,
        status: 'loading',
        error: null,
    },
    filteredMovies: [],
    filterMoviesCategories: []
}

export const fetchMovies = createAsyncThunk('movie/fetchmovies', () => {
    return axios.get('https://67f1869fc733555e24ad74ac.mockapi.io/users')
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.error(error)
            throw error;
        })

})

const moviesSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        searchFilmInState: (state, action) => {
            const { id } = action.payload
            const searchFilm = state.films.find(film => film.id === id)
            state.searchFilm.film = searchFilm;
            state.searchFilm.status = 'fulfilled'
        },
        filterMovies: (state, action) => {
            const searchTern = action.payload.toLowerCase()
            state.filteredMovies = state.films.filter(name => name.title.toLowerCase().includes(searchTern))
        },
        searchCategoriesFilms: (state, action) => {
            if(action.payload === 'All'){
                state.filterMoviesCategories = []
            }
            const searchFilms = state.films.filter(movie=> movie.category.includes(action.payload))
            state.filterMoviesCategories = searchFilms
        }

    },
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.pending, (state) => {
            state.status = 'loading';
        })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.films = action.payload;
                state.filmsCategory = [...new Set(action.payload.flatMap(value => value.category))];
                state.status = 'fulfilled'
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.status = 'loading'
                state.errors = action.error.message
                console.error(action.error.message)
            })
    }
})

export default moviesSlice.reducer
export const { searchFilmInState, filterMovies, searchCategoriesFilms } = moviesSlice.actions