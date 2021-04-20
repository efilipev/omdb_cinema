import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import MovieDeleteComponent from "../../components/MovieDelete"
import { deleteMovie, movieDeleteModalClose } from "../../actions"

const MovieDeleteContainer = (props) => {
    const { movie, deleteMovie, deleteMovieModal, movieDeleteModalClose } = props
    const handleDelete = (movie) => () => {
        deleteMovie(movie)
        movieDeleteModalClose()
    }
    const handleClose = () => {
        movieDeleteModalClose()
    }
    return (
        <MovieDeleteComponent
            isOpen={deleteMovieModal}
            handleSubmit={handleDelete(movie)}
            handleClose={handleClose}
            handleModalClose={movieDeleteModalClose}
        />
    )
}

const mapDispatchToProps = (dispatch) => ({
    dispatch,
    ...bindActionCreators({ deleteMovie, movieDeleteModalClose }, dispatch),
})

export default connect(
    (state) => ({
        ...state.modalReducer,
    }),
    mapDispatchToProps
)(MovieDeleteContainer)
