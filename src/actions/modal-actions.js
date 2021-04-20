import { ModalType } from "../store/types"

export const movieEditModalOpen = (movie) => {
    return (dispatch) => {
        dispatch({
            type: ModalType.EDIT_MOVIE_OPEN,
            payload: {
                editMovieModal: true,
                editMovie: movie,
            },
        })
    }
}

export const movieEditModalClose = () => {
    return (dispatch) => {
        dispatch({ type: ModalType.EDIT_MOVIE_CLOSE, payload: false })
    }
}

export const movieAddModalOpen = () => {
    return (dispatch) => {
        dispatch({ type: ModalType.ADD_MOVIE_OPEN, payload: true })
    }
}

export const movieAddModalClose = () => {
    return (dispatch) => {
        dispatch({ type: ModalType.ADD_MOVIE_CLOSE, payload: false })
    }
}

export const movieDeleteModalOpen = (movie) => {
    return (dispatch) => {
        dispatch({
            type: ModalType.DELETE_MOVIE_OPEN,
            payload: {
                deleteMovieModal: true,
                deleteMovie: movie,
            },
        })
    }
}

export const movieDeleteModalClose = () => {
    return (dispatch) => {
        dispatch({ type: ModalType.DELETE_MOVIE_CLOSE, payload: false })
    }
}


