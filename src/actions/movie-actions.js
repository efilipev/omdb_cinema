import { MoviesGateway } from "../api"
import { MovieType } from "../store/types"

export const getMoviesById = (ids) => {
    return async (dispatch) => {
        try {
            dispatch({ type: MovieType.GET_MOVIE_START })
            const movies = await MoviesGateway.getInstance().getMovies(ids);
            dispatch({
                type: MovieType.GET_MOVIE_DONE,
                payload: {
                    result: movies,
                },
            })
        } catch (error) {
            dispatch({ type: MovieType.GET_MOVIE_FAIL, error })
        }
    }
}

export const deleteMovie = (movie) => {
    return async (dispatch) => {
        try {
            dispatch({ type: MovieType.DELETE_MOVIE_START })
            dispatch({
                type: MovieType.DELETE_MOVIE_DONE,
                payload: { result: movie },
            })
        } catch (error) {
            dispatch({ type: MovieType.DELETE_MOVIE_FAIL, error })
        }
    }
}

export const editMovie = (movie) => {
    return async (dispatch) => {
        try {
            dispatch({ type: MovieType.EDIT_MOVIE_START })
            dispatch({ type: MovieType.EDIT_MOVIE_DONE, payload: { result: movie } })
        } catch (error) {
            dispatch({
                type: MovieType.EDIT_MOVIE_FAIL,
                payload: { message: "Failed to edit a movie" },
            })
        }
    }
}

export const addMovie = (movie) => {
    return async (dispatch) => {
        try {
            dispatch({ type: MovieType.ADD_MOVIE_START })
            dispatch({ type: MovieType.ADD_MOVIE_DONE, payload: { result: movie } })
        } catch (error) {
            dispatch({ type: MovieType.ADD_MOVIE_FAIL, error })
        }
    }
}

export const addMoviePoster = (poster) => {
    return (dispatch) => {
        try {
            dispatch({
                type: MovieType.ADD_MOVIE_POSTER_START
            })
            dispatch({
                type: MovieType.ADD_MOVIE_POSTER_DONE,
                payload: poster,
            })
        } catch (error) {
            dispatch({
                type: MovieType.ADD_MOVIE_POSTER_FAIL,
                payload: error,
            })
        }
    }
}
