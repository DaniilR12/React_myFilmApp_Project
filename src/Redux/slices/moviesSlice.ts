import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface Movie {
  id: string;
  trailerUrl:string;
  title: string;
  category: string[];
  imageUrl?: string;
  aboutInfo: string[];
  categoryes: string[];
  description:string
}


interface MoviesState{
    films:Movie[],
    filmsCategory:string[],
    status:string|null,
    errors:string|null,
    searchFilm:{
        film:Movie|null,
        status:string,
        error:string|null
    }
    filteredMovies:Movie[],
    filterMoviesCategories:Movie[],
    filtersCleared:boolean,
}

const initialState:MoviesState = {
  films: [],
  filmsCategory: [],
  status: null,
  errors: null,
  searchFilm: {
    film: null,
    status: "loading",
    error: null,
  },
  filteredMovies: [],
  filterMoviesCategories: [],
  filtersCleared: false,
};

export const fetchMovies = createAsyncThunk<Movie[]>("movie/fetchmovies", async () => {
    try{
        const response = await axios.get("https://67f1869fc733555e24ad74ac.mockapi.io/users")
        return response.data
    } catch(error) {
      console.error(error);
      throw error;
    };
});

const moviesSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    searchFilmInState: (state, action:PayloadAction<{id:string}>) => {
      const { id } = action.payload;
      const found = state.films.find((film) => film.id === id);
      state.searchFilm.film = found||null;
      state.searchFilm.status = "fulfilled";
    },
    filterMovies: (state, action:PayloadAction<string>) => {
      const searchTern = action.payload.toLowerCase();
      state.filteredMovies = state.films.filter((name) =>
        name.title.toLowerCase().includes(searchTern)
      );
    },
    searchCategoriesFilms: (state, action:PayloadAction<string>) => {
      if (action.payload === "All") {
        state.filterMoviesCategories = [];
        return
      }
      state.filterMoviesCategories = state.films.filter((movie) =>
        movie.category.includes(action.payload)
      );
    },
    clearFilters: (state) => {
      state.filterMoviesCategories = [];
      state.filteredMovies = [];
      state.filtersCleared = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
        state.filtersCleared = false;
      })
      .addCase(fetchMovies.fulfilled, (state, action:PayloadAction<Movie[]>) => {
        state.films = action.payload;
        state.filmsCategory = [
          ...new Set(action.payload.flatMap((value) => value.category)),
        ];
        state.status = "fulfilled";
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "loading";
        state.errors = action.error.message||"Unknown error";
      });
  },
});

export default moviesSlice.reducer;
export const {
  searchFilmInState,
  filterMovies,
  searchCategoriesFilms,
  clearFilters,
} = moviesSlice.actions;
