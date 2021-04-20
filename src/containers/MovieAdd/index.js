import React from "react"
import { connect } from "react-redux"
import { withSnackbar } from "notistack"
import { bindActionCreators } from "redux"
import { movieTitleFilter } from "../../utils"
import MovieAddComponent from "../../components/MovieAdd"
import { addMovie, addMoviePoster, movieAddModalClose } from "../../actions"

const MovieAddContainer = (props) => {
    const {
        movies,
        addMovie,
        enqueueSnackbar,
        addMovieModal,
        addMoviePoster,
        movieAddModalClose,
    } = props
    const addPoster = (poster) => {
        addMoviePoster(poster)
    }
    const submitForm = (values) => {
        if (movies) {
            const isMovieExist = movies.some((movie) => movie.Title === values.Title)
            if (!isMovieExist) {
                values.Title = movieTitleFilter(values.Title)
                values.Poster = props.poster.result || ""
                addMovie(values)
                movieAddModalClose()
            } else {
                enqueueSnackbar("Such movie already exist!", {
                    variant: "error",
                    anchorOrigin: {
                        vertical: "top",
                        horizontal: "center",
                    },
                })
            }
        }
    }
    return (
        <MovieAddComponent
            isOpen={addMovieModal}
            addPoster={addPoster}
            modalClose={movieAddModalClose}
            submitForm={submitForm}
        />
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        ...bindActionCreators(
            {
                addMovie,
                addMoviePoster,
                movieAddModalClose,
            },
            dispatch
        ),
    }
}

export default withSnackbar(
    connect(
        (state) => ({
            ...state.movieReducer,
            ...state.modalReducer,
        }),
        mapDispatchToProps
    )(MovieAddContainer)
)
