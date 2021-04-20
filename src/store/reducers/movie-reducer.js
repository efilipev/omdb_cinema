import { MovieType } from "../types"

const initialState = {
    movies: [],
    poster: {},
}

export default (state = initialState, action) => {
    switch (action.type) {
        case MovieType.GET_MOVIE_START:
            return {
                ...state,
                isFetching: true,
            }
        case MovieType.GET_MOVIE_DONE:
            return {
                ...state,
                isFetching: false,
                movies: mergeMovies(state.movies, action.payload.result),
            }
        case MovieType.GET_MOVIE_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            }
        case MovieType.ADD_MOVIE_START:
            return {
                ...state,
                isFetching: true,
            }
        case MovieType.ADD_MOVIE_DONE:
            return {
                ...state,
                isFetching: false,
                movies: [...state.movies, action.payload.result],
            }
        case MovieType.ADD_MOVIE_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            }
        case MovieType.EDIT_MOVIE_START:
            return {
                ...state,
                isFetching: true,
            }
        case MovieType.EDIT_MOVIE_DONE:
            return {
                ...state,
                isFetching: false,
                movies: editMovie(state.movies, action.payload.result),
            }
        case MovieType.EDIT_MOVIE_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            }
        case MovieType.DELETE_MOVIE_START:
            return {
                ...state,
                isFetching: false,
            }
        case MovieType.DELETE_MOVIE_DONE:
            return {
                ...state,
                isFetching: false,
                movies: deleteMovie(state.movies, action.payload.result),
            }
        case MovieType.DELETE_MOVIE_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            }
        case MovieType.ADD_MOVIE_POSTER_START:
            return {
                ...state,
                isFetching: true,
            }
        case MovieType.ADD_MOVIE_POSTER_DONE:
            return {
                ...state,
                isFetching: false,
                poster: action.payload,
            }
        case MovieType.ADD_MOVIE_POSTER_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            }
        default:
            return state
    }
}

const mergeMovies = (currentMovie, newMovie) => {
    const oldMovie = currentMovie.filter(
        (movie) => !(movie.imdbID === newMovie.imdbID)
    )
    return [...oldMovie, ...newMovie]
}

const editMovie = (currentMovies, newMovie) => {
    const index = currentMovies.findIndex(
        (movie) => movie.imdbID === newMovie.imdbID
    )
    const newMovies = [...currentMovies]
    newMovies[index] = { ...newMovies[index], ...newMovie }
    return newMovies
}

const deleteMovie = (currentMovie, newMovie) => {
    return currentMovie.filter((movie) => movie.imdbID !== newMovie.imdbID)
}
